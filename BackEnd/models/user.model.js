const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    profilePicture: { type: String, required: false },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    follows: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    likes: [
      {
        pack: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SamplesPack",
        },
        samples: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Audio",
          },
        ],
      },
    ],
    library: [
      {
        pack: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "SamplesPack",
        },
        samples: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Audio",
          },
        ],
      },
    ],
    confirmationToken: String,
    isConfirmed: Boolean,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  })
);

module.exports = User;
