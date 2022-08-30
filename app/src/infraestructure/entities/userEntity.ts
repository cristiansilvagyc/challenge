import { EntitySchema } from 'typeorm'
import { user } from '../../dto/user'

export const userEntity = new EntitySchema<user>({
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