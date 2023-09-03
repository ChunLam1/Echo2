const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "SamplesPack",
  new mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    description: { type: String, required: true },
    preview: { type: String, required: true },
    cover: { type: String, required: true },
    tag: { type: String, required: true },
    samples: [{ type: mongoose.Types.ObjectId, ref: "Audio" }],
    createdDate: { type: Date, default: new Date() },
    likes: { type: Number },
    revelant: { type: Number },
  })
);
