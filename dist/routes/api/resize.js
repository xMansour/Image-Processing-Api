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
const fs_1 = __importDefault(require("fs"));
const resize = express_1.default.Router();
const resizeImage = (name, ext, width, height) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(path_1.default.join(process.cwd(), path_1.default.join('assets', 'full', `${name}`)))
        .resize({
        width: width,
        height: height
    })
        .toFile(path_1.default.join(process.cwd(), path_1.default.join('assets', 'thumb', `${name.slice(0, name.indexOf('-'))}-${width}x${height}${ext}`)))
        .then((info) => {
        console.log('Success: ' + info);
    })
        .catch((err) => {
        console.log('Error: ' + err);
    });
});
resize.use((req, res, next) => {
    req.name = String(req.query.imageName);
    req.width = Number(req.query.width);
    req.height = Number(req.query.height);
    req.ext = path_1.default.extname(String(req.query.imageName));
    req.outputPath = path_1.default.join(process.cwd(), path_1.default.join('assets', 'thumb', `${req.name.slice(0, req.name.indexOf('-'))}-${req.width}x${req.height}${req.ext}`));
    next();
});
resize.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (fs_1.default.existsSync(req.outputPath)) {
        console.log('Image already resized and served from the cache');
    }
    else {
        yield resizeImage(req.name, req.ext, req.width, req.height);
        console.log('Image resized');
    }
    next();
}));
resize.get('/', (req, res) => {
    console.log('Log:: Resize Route');
    res.sendFile(req.outputPath);
});
exports.default = resize;
