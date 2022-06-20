"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/', routes_1.default);
app.listen(port, () => {
    console.log(`Server started at 127.0.0.1:${port}/`);
});
exports.default = app;
