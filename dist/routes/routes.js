"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./api/resize"));
const listImages_1 = __importDefault(require("./api/listImages"));
const routes = express_1.default.Router();
routes.use('/resize', resize_1.default);
routes.use('/listimages', listImages_1.default);
routes.use(express_1.default.static(`${process.cwd()}/public/`));
routes.get('/', (req, res) => {
    console.log('Log:: Main route');
    const indexFilePath = `${process.cwd()}/public/index.html`;
    res.sendFile(indexFilePath);
});
exports.default = routes;
