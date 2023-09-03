const SamplesPack = require("../models/samplesPack");
const Audio = require("../models/audio");

exports.searchByKeywords = async (req, res) => {
  const {
    keyword,
    limit,
    offset,
    sort,
    type,
    min_bpm,
    max_bpm,
    bpm,
    key,
    tags,
  } = req.query;

  const queryMatch = {
    "sample.name": keyword ? { $regex: keyword, $options: "i" } : undefined,
    "sample.tags": tags
      ? Array.isArray(tags)
        ? { $all: tags }
        : tags
      : undefined,
    "sample.type": type ? type : undefined,
    "sample.key": key ? key : undefined,
    "sample.bpm": bpm
      ? parseInt(bpm)
      : min_bpm && max_bpm
      ? { $gte: parseInt(min_bpm), $lte: parseInt(max_bpm) }
      : undefined,
  };
  Object.keys(queryMatch).forEach((key) => {
    if (queryMatch[key] === undefined) {
      delete queryMatch[key];
    }
  });
  let querySort;
  switch (sort) {
    case "new":
      querySort = { createdDate: -1 };
      break;
    case "popular":
      querySort = { likes: -1 };
      break;
    case "revelant":
      querySort = { revelant: -1 };
      break;
    case "old":
      querySort = { createdDate: 1 };
      break;
    default:
      querySort = { revelant: -1 };
      break;
  }
  const query = await SamplesPack.aggregate([
    {
      $lookup: {
        from: "audios", // Nom de la collection "Product"
        localField: "samples",
        foreignField: "_id",
        as: "sample",
      },
    },
    {
      $unwind: "$sample",
    },
    {
      $match: queryMatch,
    },
    {
      $project: {
        cover: 1,
        name: 1,
        likes: 1,
        revelant: 1,
        createdDate: 1,
        sample: "$sample.name",
        type: "$sample.type",
        key: "$sample.key",
        bpm: "$sample.bpm",
        tags: "$sample.tags",
      },
    },
    { $skip: parseInt(offset) },
    { $limit: parseInt(limit) },
    { $sort: querySort },
  ]);
  res.status(200).send(query);
};
