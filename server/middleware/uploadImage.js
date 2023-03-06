const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");

const multerStore = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e3);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const uploadPhoto = multer({
  storage: multerStore,
});

module.exports = {
  uploadPhoto,
};
