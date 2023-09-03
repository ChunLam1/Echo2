const SamplesPack = require("../models/samplesPack");

module.exports = async (req, res, next) => {
  const { packId } = req.params;
  const { userId } = req;

  try {
    const pack = await SamplesPack.findOne({ _id: packId });

    if (!pack) {
      return res.status(404).send("Pack Not Found");
    }

    if (pack.author.toString() !== userId) {
      return res.status(403).send("Unauthorized: You are not the author of this pack");
    }

    // If the user is the author, proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
