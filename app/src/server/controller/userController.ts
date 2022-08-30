import { Controller, Route, Tags, Body, Query, Get, Put, Delete, Post } from 'tsoa'
import  userService  from '../service'
import { responseAction, responseUser, user } from '../../dto/index'

@Route('users')
@Tags('Users')
export default class userController extends Controller {
    @Get('/{userId}')
    public async getUserById(@Query('userId') userId: number): Promise<responseUser>{
        return await userService.userService.getUserbyId(userId);
    }

    @Put('/')
    public async addUser(@Body() usr: user): Promise<responseAction>{
        return await userService.userService.addNewUser(usr);
    }

    @Post('/')
    public async updateUser(@Body() usr: user): Promise<responseAction>{
        return await userService.userService.updateUser(usr);
    }

    @Delete('/{userId}')
    public async deleteUser(@Query('userId') userId: number): Promise<responseAction>{
        return await userService.userService.deleteUser(userId);
    }
}