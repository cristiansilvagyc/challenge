import { responseAction, responseUser, user } from '../../dto/index'
import { userRepository } from '../../infraestructure/repository/userRepository'
import { iuserRepository } from '../../infraestructure/irepository/iuserRepository'

const clientRepo: iuserRepository = new userRepository();

const getUserbyId = async (userId: number) : Promise<responseUser> => {
    try {
        const usr = await clientRepo.getUserById(userId);
        const resp: responseUser = {
            user: usr,
            code: 200,
            message: ''
        }
        return resp;
    } catch (er) {
        const resp: responseUser = {
            user: null,
            code: 500,
            message: 'Exists an error to get User ' + er
        }
        return resp;
    }
}

const addNewUser = async (usr: user) : Promise<responseAction> => {
    try {
        const r = await clientRepo.addUser(usr);
        const resp: responseAction = {
            code: 200,
            message: ''
        }
        return resp;
    } catch (er) {
        const resp: responseAction = {
            code: 500,
            message: 'Exists an error to add User ' + er
        }
        return resp;
    }
}

const updateUser = async (usr: user) : Promise<responseAction> => {
    try {
        const r = await clientRepo.editUser(usr);
        const resp: responseAction = {
            code: 200,
            message: ''
        }
        return resp;
    } catch (er) {
        const resp: responseAction = {
            code: 500,
            message: 'Exists an error to update User ' + er
        }
        return resp;
    }
}

const deleteUser = async (userId: number) : Promise<responseAction> => {
    try {
        const usr = await clientRepo.deleteUser(userId);
        const resp: responseAction = {
            code: 200,
            message: ''
        }
        return resp;
    } catch (er) {
        const resp: responseAction = {
            code: 500,
            message: 'Exists an error to get User ' + er
        }
        return resp;
    }
}

export = {
    getUserbyId,
    addNewUser,
    updateUser,
    deleteUser
}