import express from "express";
import sharp from "sharp";
import path from "path";
const resize = express.Router();

let resizeImage = async (name: string, ext: string, width: number, height: number) => {
    await sharp(`assets\\full\\${name}`)
        .resize({
            width: width,
            height: height,
        }).toFile(`assets\\thumb\\${name.slice(0, name.indexOf("-"))}-${width}x${height}${ext}`)
        .then(info => {
            console.log("Success: " + info);
        })
        .catch(err => {
            console.log("Error: " + err);
        });

}


resize.get("/", (req, res) => {
    console.log("Resize Route");
    res.send("Resize Route");
    const ext = path.extname("assets\\full\\image-3840x2160.jpg");
    resizeImage(String(req.query.imageName), ext, Number(req.query.w), Number(req.query.h));
})



export default resize;