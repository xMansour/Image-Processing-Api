"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const listImages = express_1.default.Router();
let rawData = [];
listImages.use((req, res, next) => {
    rawData = [];
    fs_1.default.readdir(path_1.default.join(process.cwd(), path_1.default.join("assets", "full")), (error, files) => {
        files.forEach((file) => {
            rawData.push(file);
        });
        next();
    });
});
listImages.get('/', (req, res) => {
    console.log('Log:: ListImages Route');
    let htmlTemplate = '<div><ol>';
    rawData.forEach((file) => {
        htmlTemplate += `<li style="font-size:18px; margin:10px;">${file}</li>`;
    });
    htmlTemplate += '</ol></div>';
    res.send(htmlTemplate);
});
exports.default = listImages;
