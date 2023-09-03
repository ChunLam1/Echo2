const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  author: { type: mongoose.Types.ObjectId, ref: "User" },
  name: { type: String, required: true },
  type: { type: String, required: false },
  tags: [{ type: String, required: false }],
  src: { type: String, required: true },
});

module.exports = mongoose.model("Audio", audioSchema);
