"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntity = void 0;
const typeorm_1 = require("typeorm");
exports.userEntity = new typeorm_1.EntitySchema({
    name: 'users',
    columns: {
        userid: {
            type: Number,
            primary: true,
            generated: true,
        },
        username: {
            type: String,
            nullable: false,
        },
        phone: {
            type: String,
            nullable: true,
        },
        email: {
            type: String,
            nullable: true,
        },
        fullName: {
            type: String,
            nullable: true,
        },
    }
});
//# sourceMappingURL=userEntity.js.map