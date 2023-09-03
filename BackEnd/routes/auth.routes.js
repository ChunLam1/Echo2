const { verifySignUp } = require("../middlewares");
const authController = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    authController.signup
  );
  
  app.post("/api/auth/signin", authController.signin);
  app.post("/api/auth/refreshtoken", authController.refreshToken);
  app.post("/api/auth/confirmEmail/:token", authController.confirmEmail);
  app.get("/api/auth/:id", authController.userInfo)
  app.post("/api/auth/update/:id", authController.userUpdate)

};
