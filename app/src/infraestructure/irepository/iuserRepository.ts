import { user } from '../../dto/user'
import { DeleteResult } from 'typeorm'

export interface iuserRepository {
    getUserById(userId: number): Promise<user | null>
    addUser(pUser: user): Promise<user | null>
    editUser(pUser: user): Promise<user | null>
    deleteUser(userId: number): Promise<DeleteResult>
}