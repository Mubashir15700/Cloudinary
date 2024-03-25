const express = require("express");
const cloudinary = require("cloudinary").v2;

const app = express();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const imageUrls = [
    {
        id: "olympic_flag",
        url: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    },
    {
        id: "dice",
        url: "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png",
    }
];

const singleUpload = () => {
    cloudinary.uploader.upload(imageUrls[0].url,
        { public_id: imageUrls[0].id },
        function (error, result) {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
            }
        }
    );
}

const multipleUpload = () => {
    for (const image of imageUrls) {
        cloudinary.uploader.upload(image.url,
            { public_id: image.id },
            function (error, result) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                }
            }
        );
    }
}

// singleUpload();
// multipleUpload();

app.listen(3000, () => {
    console.log("Server up");
});
