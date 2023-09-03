const mongoose = require("mongoose");

module.exports = new mongoose.model(
  "Beat",
  new mongoose.Schema({
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    name: { type: String, required: true },
    tags: [{ type: String, required: true }],
    key: { type: String, required: true },
    cover: { type: String, required: true },
    price: { type: Number },
    likes: { type: Number },
    plays: { type: Number },
    tagged: { type: String, required: true },
    untagged: { type: String, required: true },
    createdDate: { type: Date, default: new Date() },
  })
);
