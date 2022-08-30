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
const userRepository_1 = require("../../infraestructure/repository/userRepository");
const clientRepo = new userRepository_1.userRepository();
const getUserbyId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usr = yield clientRepo.getUserById(userId);
        const resp = {
            user: usr,
            code: 200,
            message: ''
        };
        return resp;
    }
    catch (er) {
        const resp = {
            user: null,
            code: 500,
            message: 'Exists an error to get User ' + er
        };
        return resp;
    }
});
const addNewUser = (usr) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const r = yield clientRepo.addUser(usr);
        const resp = {
            code: 200,
            message: ''
        };
        return resp;
    }
    catch (er) {
        const resp = {
            code: 500,
            message: 'Exists an error to add User ' + er
        };
        return resp;
    }
});
const updateUser = (usr) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const r = yield clientRepo.editUser(usr);
        const resp = {
            code: 200,
            message: ''
        };
        return resp;
    }
    catch (er) {
        const resp = {
            code: 500,
            message: 'Exists an error to update User ' + er
        };
        return resp;
    }
});
const deleteUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usr = yield clientRepo.deleteUser(userId);
        const resp = {
            code: 200,
            message: ''
        };
        return resp;
    }
    catch (er) {
        const resp = {
            code: 500,
            message: 'Exists an error to get User ' + er
        };
        return resp;
    }
});
module.exports = {
    getUserbyId,
    addNewUser,
    updateUser,
    deleteUser
};
//# sourceMappingURL=userService.js.map