const audio = require("../models/audio");

exports.create = async (req, res) => {
  const { name, tempo, tags, src } = req.body;
  audio
    .create({
      name: name,
      tempo: tempo,
      tags: tags,
      src: src,
      author: req.userId,
    })
    .then((audio) => {
      res.status(200).send(audio);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.delete = (req, res) => {
  const { audioId } = req.params;
  audio
    .findByIdAndDelete(audioId)
    .then((deleted) => {
      if (deleted) res.status(200).send(deleted);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.update = (req, res) => {
  const { audioId } = req.params;
  const { name } = req.body;
  audio
    .findByIdAndUpdate(audioId, { $set: { name: name } }, { new: true })
    .then((updated) => {
      if (updated) res.status(200).send(updated);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.getOne = (req, res) => {
  const { audioId } = req.params;
  audio
    .findOne({ _id: audioId })
    .then((audio) => {
      if (audio) res.status(200).send(audio);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
