const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const subMiddleware = require("../middlewares/subscription");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.put("/api/user/follow/:userId", [authJwt.verifyToken], controller.follow);
  app.put(
    "/api/user/unfollow/:userId",
    [authJwt.verifyToken],
    controller.unfollow
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post(
    "/api/updateProfile",
    [authJwt.verifyToken],

    controller.updateProfile
  );

  app.post(
    "/api/user/like",
    authJwt.verifyToken,
    subMiddleware.checkUserSubscription,
    controller.like
  );

  app.post(
    "/api/user/unlike",
    authJwt.verifyToken,
    subMiddleware.checkUserSubscription,
    controller.unlike
  );

  app.post(
    "/api/user/add",
    authJwt.verifyToken,
    subMiddleware.checkUserSubscription,
    controller.addToLibrary
  );

  app.post(
    "/api/user/remove",
    authJwt.verifyToken,
    subMiddleware.checkUserSubscription,
    controller.removeToLibrary
  );

  app.post(

    "/api/deleteAccount",
    [authJwt.verifyToken],
    controller.deleteAccount
  );
};

