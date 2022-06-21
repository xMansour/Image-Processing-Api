"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./api/resize"));
const listImages_1 = __importDefault(require("./api/listImages"));
const path_1 = __importDefault(require("path"));
const routes = express_1.default.Router();
routes.use('/resize', resize_1.default);
routes.use('/listimages', listImages_1.default);
routes.use(express_1.default.static(path_1.default.join(process.cwd(), 'public')));
routes.get('/', (req, res) => {
    console.log('Log:: Main route');
    const indexFilePath = path_1.default.join(process.cwd(), 'public', 'index.html');
    res.sendFile(indexFilePath);
});
exports.default = routes;
