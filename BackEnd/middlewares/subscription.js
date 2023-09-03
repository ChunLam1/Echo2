const Subscription = require("../models/subscription");

exports.checkUserSubscription = async (req, res, next) => {
  const subscription = await Subscription.findOne({ user: req.userId });

  if (!subscription) {
    return res.status(403).send({ message: "No Subscription Found" });
  } else {
    if (subscription.isAvailable) {
      next();
    } else {
      return res.status(403).send({ message: "Update your subscription" });
    }
  }
};
