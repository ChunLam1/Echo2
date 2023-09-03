const express = require("express");
const router = express.Router();

const samplesPackController = require("../controllers/samplesPackController");
const checkAuthorMiddleware = require("../middlewares/checkAuthor");
const authJwt = require("../middlewares/authJwt");

router.route("/").post(authJwt.verifyToken, samplesPackController.create);
router
  .route("/:packId")
  // Update SamplesPack (with authorization check)
  .put(authJwt.verifyToken, checkAuthorMiddleware, samplesPackController.update)
  .put(authJwt.verifyToken, samplesPackController.update)
  .get(authJwt.verifyToken, samplesPackController.getOne)
  .delete(authJwt.verifyToken, samplesPackController.delete);
  

module.exports = router;
