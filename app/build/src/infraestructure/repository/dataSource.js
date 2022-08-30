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
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDB = exports.servDataSource = void 0;
const typeorm_1 = require("typeorm");
const userEntity_1 = require("../entities/userEntity");
require("dotenv/config");
//require("dotenv").config({ path: '../../../.env' })
const dsOptions = {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    port: process.env.TYPEORM_PORT,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [userEntity_1.userEntity],
};
exports.servDataSource = new typeorm_1.DataSource(dsOptions);
const initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.servDataSource.initialize();
        console.log('Data Source has been initialized!');
    }
    catch (ex) {
        console.error('Error during Data Source initialization - ', ex);
    }
});
exports.initDB = initDB;
//# sourceMappingURL=dataSource.js.map