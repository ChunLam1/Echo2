const Subscription = require("../models/subscription");

exports.subscribe = async (req, res) => {
  const { name, frequency } = req.body;
  const sub = await Subscription.findOne({ user: req.userId });

  if (!sub) {
    const newSubsciption = new Subscription({
      user: req.userId,
      name: name,
      expiredDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      isAvailable: true,
      frequency: frequency,
    });

    newSubsciption
      .save()
      .then((sub) => {
        res.status(201).send(sub);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  } else {
    Subscription.findOneAndUpdate(
      { user: req.userId },
      { $set: { name: name } },
      { new: true }
    )
      .then((subsciption) => {
        if (subsciption) res.status(200).send(subsciption);
        else res.status(404).send("Subscription not found");
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
};

exports.unsubscribe = (req, res) => {
  Subscription.findOneAndDelete({ user: req.userId }, { new: true })
    .then((subsciption) => {
      if (subsciption) res.status(200).send(subsciption);
      else res.status(404).send("Subscription not found");
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};
