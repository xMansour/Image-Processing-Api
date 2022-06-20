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
const fs_1 = __importDefault(require("fs"));
const listImages = express_1.default.Router();
let rawData = [];
listImages.use((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    rawData = [];
    const files = fs_1.default.readdir(`${process.cwd()}/assets/full`, (error, files) => {
        files.forEach(file => {
            rawData.push(file);
        });
        next();
    });
}));
listImages.get('/', (req, res) => {
    console.log('Log:: ListImages Route');
    let htmlTemplate = "<div><ol>";
    rawData.forEach((file) => {
        htmlTemplate += `<li style="font-size:18px; margin:10px;">${file}</li>`;
    });
    htmlTemplate += "</ol></div>";
    res.send(htmlTemplate);
});
exports.default = listImages;
