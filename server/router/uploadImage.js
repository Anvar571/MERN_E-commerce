const cloudinary = require("cloudinary");
const router =require("express").Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.SECRET_KEY,
});

router.post("/upload", (req, res, next) => {
    try {
        console.log(req.files); 
        res.json({
            message: "upload success"
        })
    } catch (error) {
        next(error)
    }
})

module.exports = router