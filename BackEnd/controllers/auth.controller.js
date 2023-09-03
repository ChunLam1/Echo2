const config = require("../config/auth.config");
const db = require("../models");
const auth = require("../middlewares/authJwt");
const { user: User, role: Role, refreshToken: RefreshToken } = db;
const { generateResetToken, sendResetPasswordEmail } = require("../helpers/password.helpers");

var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.EMAIL_PWD, 
  },
});

exports.signup = async (req, res) => {
  const password = req.body.password;

  try {
    if (!password) {
      throw new Error("Password is required."); // Throw an error if the password is missing
    }

    const salt = await bcrypt.genSalt(10);
    if (!salt) {
      throw new Error("Failed to generate salt."); // Throw an error if the salt is not generated
    }

    const hashedPassword = await bcrypt.hash(password, salt);

    const confirmationToken = Math.random().toString(36).slice(2);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      confirmationToken: confirmationToken,
      isConfirmed: false,
    });

    const savedUser = await user.save();

    if (req.body.roles) {
      const roles = await Role.find({
        name: { $in: req.body.roles },
      });

      savedUser.roles = roles.map((role) => role._id);
      await savedUser.save();
    } else {
      const role = await Role.findOne({ name: "user" });
      savedUser.roles = [role._id];
      await savedUser.save();
    }

    try {
      const mailOptions = {
        from: process.env.EMAIL, // Replace with your email address
        to: user.email,
        subject: "Account Confirmation",
        text: `Please click the link below to confirm your email:\n\n${process.env.APP_BASE_URL}/confirm-email/${user.confirmationToken}`,
      };

      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .json({ message: "Confirmation email sent. Please check your inbox." }),
        console.log(`${process.env.APP_BASE_URL}/confirm-email/${user.confirmationToken}`);
    } catch (err) {
      console.error(err);
      return res
        .status(500)
        .send({ message: "Failed to send the confirmation email." });
    }
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res
      .status(500)
      .send({ message: `An error occurred during signup: ${err.message}` });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    }).populate("roles", "-__v");

    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    // const passwordIsValid = bcrypt.compare(req.body.password, user.password);
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: config.jwtExpiration,
    });

    let refreshToken = await RefreshToken.createToken(user);

    const authorities = user.roles.map(
      (role) => "ROLE_" + role.name.toUpperCase()
    );

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token, 
      refreshToken: refreshToken,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.confirmEmail = async (req, res) => {
  const { token } = req.params;

  try {
    const user = await User.findOne({ confirmationToken: token });

    if (!user) {
      return res
        .status(404)
        .send({ message: `Invalid confirmation token.${token}` });
    }

    // Mark the user's email as confirmed
    user.isConfirmed = true;
    user.confirmationToken = undefined;
    await user.save();

    // Redirect the user to google.com after successful email confirmation
    return res.redirect(process.env.APP_BASE_URL + "/signin");
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

exports.forgotPassword = async  (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).send({ message:"User not found"});
    }
  
  // Generate a reset token
  const resetToken = generateResetToken(user);
  user.resetPasswordToken = resetToken;
  user.resetPasswordExpires = Date.now() + 360000;

  await user.save();

  //send the reset password email

  const resetLink = `${process.env.APP_BASE_URL}/reset-password/${resetToken}`;
  await sendResetPasswordEmail(email, resetLink);

  res.send({message : "Reset password email sent successfully"})
  } catch (err) {
    console.error(err);
    res.status(500).send({message : err.message});
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const  { password } = req.body;

  try {
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now()},
    });

    if (!user) {
      res.status(400).send({message: "Invalid or expired token." });
      return;
    }

    //update the users password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.send({message: "Password updated."});
  } catch (err){
    console.error(err);
    res.status(500).send({message: err.message});
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken: requestToken } = req.body;

  if (requestToken == null) {
    return res.status(403).json({ message: "Refresh Token is required!" });
  }

  try {
    let refreshToken = await RefreshToken.findOne({ token: requestToken });

    if (!refreshToken) {
      res.status(403).json({ message: "Refresh token is not in database!" });
      return;
    }

    if (RefreshToken.verifyExpiration(refreshToken)) {
      RefreshToken.findByIdAndRemove(refreshToken._id, {
        useFindAndModify: false,
      }).exec();

      res.status(403).json({
        message: "Refresh token was expired. Please make a new signin request",
      });
      return;
    }

    let newAccessToken = jwt.sign(
      { id: refreshToken.user._id },
      config.secret,
      {
        expiresIn: config.jwtExpiration,
      }
    );

    return res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: refreshToken.token,
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }

};


exports.userInfo = async (req, res) => {
  const userId = req.params.id;
  try {
    // Recherche de l'utilisateur par son ID dans la base de données
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      isConfirmed: user.isConfirmed,
      profilePicture: user.profilePicture,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.userUpdate = async (req, res) => {
  const userId = req.params.id;
  const profilePicture = req.body.profilePicture;
  try {
    // Recherche de l'utilisateur par son ID dans la base de données
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }
    if (profilePicture) {
      user.profilePicture = profilePicture; 
    }
    await user.save();
    return res.status(200).json({ message: "User updated successfully." });

  } catch (err) {
    console.error('Error during user update:', err);
    return res.status(500).json({ message: "Internal server error." });
  }
};

