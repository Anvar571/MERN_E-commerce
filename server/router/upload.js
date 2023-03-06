const cloudinary = require("cloudinary");
const router = require("express").Router();
const multer = require("multer");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

const storageM = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../images"));
    },
    filename: (req, file, cb) => {
        const uniqueFileName = Date.now() +"-"+Math.round(Math.random() * 100);
        cb(null, file.fieldname + uniqueFileName);
    }
})

// const upload = multer(
//     {
//         storage: storageM
//     }
// )

const upload= multer({dest: "uploads/"})

router.post("/", upload.array("image", 5), (req, res) => {
  try {
    console.log(req.files);
    console.log(req.file);
    res.json({message: "success upload"})
  } catch (error) {
    next(error);
  }
});

module.exports = router;
