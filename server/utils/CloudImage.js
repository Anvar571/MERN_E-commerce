const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
  });
  
const cloudinaryUpload = async (filePath) => {
    return new Promise((res, rej) => {
        cloudinary.uploader.upload(filePath, (result) => {
            res(
                {
                    url: result.secure_url
                },
                {resource_type: "auto"}
            )
        })
    })
}

module.exports = cloudinaryUpload