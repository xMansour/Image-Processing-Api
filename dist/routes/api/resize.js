"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
let resizeImage = (fullImage, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)('./image-3840x2160.jpg')
        .resize({
        width: width,
        height: height,
    }).toFile('imageResize.jpg').then(info => {
        console.log(info);
    })
        .catch(err => {
        console.log(err);
    });
});
const resize = express_1.default.Router();
resize.get("/", (req, res) => {
    console.log("Resize Route");
    res.send("Resize Route");
    console.log(req.query);
    console.log(req.query.h);
    console.log(req.query.w);
    const fullImagePath = path_1.default.basename("../../../assets/full/image-3840x2160.jpg");
    const resizedImagePath = path_1.default.basename("../../../assets/thumb/");
    console.log(fullImagePath);
    console.log(resizedImagePath);
    //sharp(fullImagePath).resize(Number(req.query.w), Number(req.query.h)).toFile(`${resizedImagePath}image-${req.query.w}x${req.query.h}.jpg`)
    resizeImage("Os", Number(req.query.w), Number(req.query.h));
});
exports.default = resize;
