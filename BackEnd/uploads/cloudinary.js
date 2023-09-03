const Cloudinary = require('cloudinary')

const dotenv = require('dotenv')

dotenv.config()

Cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

exports.uploads = (file, folder) => {
    return new Promise(resolve => {
        Cloudinary.uploader.upload(file, (result) => {
            resolve({
                url: result.url,
                id: result.public_id
            })
            console.log("ici",result);
        }, {
            resource_type: "auto",
            folder: folder
        })
    })
}