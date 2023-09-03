const User = require("../models/user.model");
const Audio = require("../models/audio");
const SamplesPack = require("../models/samplesPack");
const db = require("../models");
const { refreshToken: RefreshToken } = db;
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD,
  },
});


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.follow = async (req, res) => {
  const { userId } = req.params;
  User.findByIdAndUpdate(
    req.userId,
    {
      $addToSet: {
        follow: userId,
      },
    },
    { new: true }
  )
    .then((currentUser) => {
      User.findByIdAndUpdate(
        userId,
        {
          $addToSet: {
            followers: req.userId,
          },
        },
        { new: true }
      )
        .then((updatedUser) => {
          res
            .status(200)
            .send({ currentUser: currentUser, updatedUser: updatedUser });
        })
        .catch((error) => {
          res.status(500).send({ message: error.message });
        });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

exports.unfollow = async (req, res) => {
  const { userId } = req.params;
  User.findByIdAndUpdate(
    req.userId,
    {
      $pull: {
        follow: userId,
      },
    },
    { new: true }
  )
    .then((currentUser) => {
      User.findByIdAndUpdate(
        userId,
        {
          $pull: {
            followers: req.userId,
          },
        },
        { new: true }
      )
        .then((updatedUser) => {
          res
            .status(200)
            .send({ currentUser: currentUser, updatedUser: updatedUser });
        })
        .catch((error) => {
          res.status(500).send({ message: error.message });
        });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};
exports.updateProfile = async (req, res) => {
  const { username, email, currentPassword, newPassword } = req.body;


  try {
    // Find the user by their ID
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Update the username if provided
    if (username) {
      user.username = username;
    }

    // Update the email if provided
    if (email) {
      user.email = email;
      user.isConfirmed = false; // If the email is being updated, mark it as unconfirmed
      const confirmationToken = Math.random().toString(36).slice(2);
      user.confirmationToken = confirmationToken;
      const mailOptions = {
        from: process.env.EMAIL, // Replace with your email address
        to: user.email,
        subject: "Account Confirmation",
        text: `Please click the link below to confirm your email:\n\n${process.env.APP_BASE_URL}/confirm-email/${user.confirmationToken}`,
      };
      await transporter.sendMail(mailOptions);
    }

    // Check if the provided current password matches the user's actual password
    if (currentPassword) {
      const isPasswordValid = await bcrypt.compare(
        currentPassword,
        user.password
      );

      if (!isPasswordValid) {
        return res.status(401).send({ message: "Invalid current password." });
      }
    }

    // Update the password if provided
    if (newPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);
      user.password = hashedPassword;
    }

    await user.save();

    return res.status(200).json({ message: "Profile updated successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    // Find the user by their ID
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }

    // Delete the user
    await user.deleteOne({ _id: req.userId });

    // Also, remove any associated refresh tokens
    await RefreshToken.deleteMany({ user: req.userId });

    return res.status(200).json({ message: "Account deleted successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: err.message });
  }
};

exports.like = async (req, res) => {
  const { packId, audioId } = req.body;
  let user = await User.findOne({ _id: req.userId });
  let founded = false;
  for (let like of user.likes) {
    if (like.pack.toString() === packId) {
      founded = true;
      for (const audio of audioId) {
        if (!like.samples.includes(audio)) {
          like.samples.push(audio);
        }
      }
    }
  }
  if (!founded) {
    const like = {
      pack: packId,
      samples: [...audioId],
    };
    user.likes.push(like);
  }
  await Audio.updateMany(
    { _id: { $in: audioId } },
    {
      $inc: { likes: 1 },
    }
  );
  await SamplesPack.findOneAndUpdate(
    { _id: packId },
    {
      $inc: { likes: 1 },
    }
  );
  user.save();
  res.status(200).send(user);
};

exports.unlike = async (req, res) => {
  const { packId, audioId } = req.body;
  const user = await User.findOne({ _id: req.userId });
  user.likes.forEach((like, index) => {
    if (like.pack.toString() === packId) {
      like.samples = like.samples.filter(
        (element) => !audioId.includes(element.toString())
      );
      if (!like.samples.length) {
        user.likes.splice(index, 1);
      }
    }
  });
  await Audio.updateMany(
    { _id: { $in: audioId } },
    {
      $inc: { likes: -1 },
    }
  );
  await SamplesPack.findOneAndUpdate(
    { _id: packId },
    {
      $inc: { likes: -1 },
    }
  );
  user.save();
  res.status(200).send(user);
};

exports.addToLibrary = async (req, res) => {
  const { packId, audioId } = req.body;
  let user = await User.findOne({ _id: req.userId });
  let founded = false;
  for (let lib of user.library) {
    if (lib.pack.toString() === packId) {
      founded = true;
      for (const audio of audioId) {
        if (!lib.samples.includes(audio)) {
          lib.samples.push(audio);
        }
      }
    }
  }
  if (!founded) {
    const added = {
      pack: packId,
      samples: [...audioId],
    };
    user.library.push(added);
  }
  await Audio.updateMany(
    { _id: { $in: audioId } },
    {
      $inc: { revelant: 1 },
    }
  );
  await SamplesPack.findOneAndUpdate(
    { _id: packId },
    {
      $inc: { revelant: 1 },
    }
  );
  user.save();
  res.status(200).send(user);
};

exports.removeToLibrary = async (req, res) => {
  const { packId, audioId } = req.body;
  const user = await User.findOne({ _id: req.userId });
  user.library.forEach((lib, index) => {
    if (lib.pack.toString() === packId) {
      lib.samples = lib.samples.filter(
        (element) => !audioId.includes(element.toString())
      );
      if (!lib.samples.length) {
        user.library.splice(index, 1);
      }
    }
  });
  await Audio.updateMany(
    { _id: { $in: audioId } },
    {
      $inc: { revelant: -1 },
    }
  );
  await SamplesPack.findOneAndUpdate(
    { _id: packId },
    {
      $inc: { revelant: -1 },
    }
  );
  user.save();
  res.status(200).send(user);
};

