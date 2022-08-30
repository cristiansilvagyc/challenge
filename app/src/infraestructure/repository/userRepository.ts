import { Repository } from 'typeorm'
import { user } from '../../dto/index'
import { userEntity } from '../entities/userEntity'
import { iuserRepository } from '../irepository/iuserRepository'
import { servDataSource } from '../repository/dataSource'
import { DeleteResult } from 'typeorm'

export class userRepository implements iuserRepository {
    private repository: Repository<user>

    constructor() {
        this.repository = servDataSource.getRepository(userEntity);
    }

    async getUserById(userId: number): Promise<user | null> {
        return await this.repository.findOne({
            where: {
                userid: userId
            }
        });
    }

    async editUser(pUser: user): Promise<user | null> {
        return await this.repository.save(pUser);
    }

    async addUser(pUser: user): Promise<user | null> {
        return await this.repository.save(pUser);
    }

    async deleteUser(userId: number): Promise<DeleteResult> {
        return await this.repository.delete({
            userid: userId
        });
    }
}