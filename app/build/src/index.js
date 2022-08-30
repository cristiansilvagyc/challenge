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
const express_1 = __importDefault(require("express"));
const dataSource_1 = require("./infraestructure/repository/dataSource");
//import cors from 'cors'
var cors = require('cors');
const app = (0, express_1.default)();
const routes = require('./server/routes');
app.use(cors());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/', routes);
app.listen(8080, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('listen done again');
    yield (0, dataSource_1.initDB)();
}));
module.exports = { app };
//# sourceMappingURL=index.js.map