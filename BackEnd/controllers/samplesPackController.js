const SamplesPack = require("../models/samplesPack");

exports.create = async (req, res) => {
  const { name, description, preview, cover, tag, samples } = req.body;
  SamplesPack.create({
    name,
    description,
    preview,
    cover,
    tag,
    samples,
    author: req.userId,
  })
    .then((pack) => {
      res.status(201).send(pack);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.delete = (req, res) => {
  const { packId } = req.params;
  SamplesPack.findByIdAndDelete(packId)
    .then((deleted) => {
      if (deleted) res.status(200).send(deleted);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.update = (req, res) => {
  const { packId } = req.params;
  const { name, description, preview, cover, tag, samples } = req.body;
  SamplesPack.findByIdAndUpdate(
    packId,
    {
      $set: {
        name: name,
        description: description,
        preview: preview,
        cover: cover,
        tag: tag,
        samples: samples,
      },
    },
    { new: true }
  )
    .then((updated) => {
      if (updated) res.status(200).send(updated);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.getOne = (req, res) => {
  const { packId } = req.params;
  SamplesPack.findOne({ _id: packId })
    .populate("samples")
    .then((pack) => {
      if (pack) res.status(200).send(pack);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
