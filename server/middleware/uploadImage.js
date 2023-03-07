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
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpeg");
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported file format",
      },
      false
    );
  }
};

const uploadPhoto = multer({
  storage: multerStore,
  fileFilter: multerFilter,
  limits: { fieldSize: 2000000 },
});

const productImageResize = async (req, res, next) => {
  try {
    if (!req.files) return next();

    await Promise.all(
      req.files.map(async (file) => {
        await sharp(file.path)
          .resize(300, 300)
          .toFormat("jpeg")
          .jpeg({ quality: 90 })
          .toFile(`images/${file.filename}`);
      })
    );

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadPhoto,
  productImageResize,
};
