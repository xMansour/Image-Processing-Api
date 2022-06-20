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
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const request = (0, supertest_1.default)(app_1.default);
describe('GET /', () => {
    it('Respnse status should equal to 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/');
        expect(response.status).toBe(200);
    }));
});
describe('GET /resize', () => {
    it('Testing the resizing functionality', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/resize?imageName=JimRohn-3840x2160.jpg&width=650&height=200');
        expect(response.status).toBe(200);
    }));
});
describe('GET /listimages', () => {
    it('Testing the listing functionality', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/listimages');
        expect(response.status).toBe(200);
    }));
});
