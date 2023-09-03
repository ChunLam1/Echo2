const express = require("express");
const router = express.Router();
const controller = require("../controllers/file.controller");
const uploadFileMiddleware = require("../middlewares/upload");
//Cloudinary
const upload = require("../uploads/multer");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/upload", controller.upload);
  app.post(
    "/api/upload/user-image",
    upload.array("image"),
    controller.uploadUserImage
  );
  app.get("/files", controller.getListFiles);
  app.get("/files/filter", controller.getFilterListFiles);
  app.get("/files/filter2", controller.getFilterListFiles2);
  app.get("/files/:name", controller.download);
};
