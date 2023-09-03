const Beat = require("../models/beat");

exports.create = async (req, res) => {
  const { name, cover, key, price, tags, tagged, untagged } = req.body;
  Beat.create({
    name,
    cover,
    key,
    price,
    tags,
    untagged,
    tagged,
    author: req.userId,
  })
    .then((beat) => {
      res.status(201).send(beat);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.delete = (req, res) => {
  const { beatId } = req.params;
  Beat.findByIdAndDelete(beatId)
    .then((deleted) => {
      if (deleted) res.status(200).send(deleted);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.getOne = (req, res) => {
  const { beatId } = req.params;
  Beat.findOne({ _id: beatId })
    .populate("samples")
    .then((beat) => {
      if (beat) res.status(200).send(beat);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.like = (req, res) => {
  const { beatId } = req.params;
  Beat.findOneAndUpdate(
    { _id: beatId },
    {
      $inc: { likes: 1 },
    }
  )
    .then((beat) => {
      if (beat) res.status(200).send(beat);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

exports.play = (req, res) => {
  const { beatId } = req.params;
  Beat.findOneAndUpdate(
    { _id: beatId },
    {
      $inc: { plays: 1 },
    }
  )
    .then((beat) => {
      if (beat) res.status(200).send(beat);
      else res.status(404).send("Not Found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
