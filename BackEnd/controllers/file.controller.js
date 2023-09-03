const { hash } = require("bcryptjs");
const uploadFile = require("../middlewares/upload");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const audio = require("../models/audio");

const cloudinary = require("../uploads/cloudinary");
const baseUrl = "/resources/static/assets/uploads/"; // change by the
const author = "64be398fd9475f4bbd70e09d"
const upload = async (req, res) => {
  try {
    uploadFile(req, res, async (err) => {
      const name = req.body.name;
      console.log("popo",req.file);
      if (req.file == undefined) {
        return res.status(400).send({ message: "Please upload a file!" });
      }

      const audioData = {
        name: name,
        type: req.body.type,
        tags: req.body.category,
        src: baseUrl + req.file.filename,
        author: "64be398fd9475f4bbd70e09d", // Assuming you have a user ID from authentication
      };
      console.log("audioData",req.file);
      // Save audioData to MongoDB using Mongoose
      audio
        .create(audioData)
        .then((audio) => {
          res.status(200).send({
            message: "Uploaded the file successfully: " + req.file,
          });
        })

      // res.status(200).send({
      //   message: "Uploaded the file successfully: " + req.file,
      // });
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${request.files}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = "./../FrontEnd/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    // console.log("files", files)
    audio
    .find()
    .then((audios) => {
      // console.log("audios", audios);
      audios.forEach((file) => {
        
        fileInfos.push({
          title: file.name,
          artist: file.author,
          bpm: file.bpm,
          key: file.key,
          type: file.type,
          tags: file.tags,
          likes: file.likes,
          revelant: file.revelant,
          src: file.src,
        });
        
      });
      console.log(fileInfos)
      res.status(200).send(fileInfos);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
    

  });
};

const getFilterListFiles = (req, res) => {
  const { type } = req.query; // Get the 'type' query parameter
  console.log(req.query)
  const directoryPath = "./../FrontEnd/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];

    audio
      .find({ type: type }) // Filter by 'type' in the database
      .then((audios) => {
        audios.forEach((file) => {
          fileInfos.push({
            title: file.name,
            artist: file.author,
            bpm: file.bpm,
            key: file.key,
            type: file.type,
            tags: file.tags,
            likes: file.likes,
            relevant: file.relevant,
            src: file.src,
          });
        });
        console.log(fileInfos);
        res.status(200).send(fileInfos);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  });
};

const getFilterListFiles2 = (req, res) => {
  const { category } = req.query; // Get the 'type' query parameter
  console.log(req.query)
  const directoryPath = "./../FrontEnd/resources/static/assets/uploads/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];

    audio
      .find({ tags: category }) 
      .then((audios) => {
        audios.forEach((file) => {
          fileInfos.push({
            title: file.name,
            artist: file.author,
            bpm: file.bpm,
            key: file.key,
            type: file.type,
            tags: file.tags,
            likes: file.likes,
            relevant: file.relevant,
            src: file.src,
          });
        });
        console.log(fileInfos);
        res.status(200).send(fileInfos);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = "./../FrontEnd/resources/static/assets/uploads/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

const uploadUserImage = async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  const urls = [];
  const files = req.files;
  for (const file of files) {
    const { path } = file;
    const newPath = await uploader(path);
    urls.push(newPath);
    fs.unlinkSync(path);
  }
  res.status(200).json({
    message: "images uploaded successfully",
    data: urls,
  });
};

module.exports = {
  upload,
  getListFiles,
  getFilterListFiles,
  download,
  uploadUserImage,
  getFilterListFiles2,
};
