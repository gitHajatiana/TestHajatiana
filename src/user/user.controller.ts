import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/user/user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    async findAll(): Promise<User[]>{
        return this.userService.findAll();
    }
    
    @Get(':id')
    async findById(@Param('id') id: number): Promise<User | null>{
        return this.userService.findById(id);
    }

    @Post()
    async create(@Body() userData: Partial<User>): Promise<User>{
        return this.userService.addUser(userData);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() userData: Partial<User>): Promise<User>{
        return this.userService.updateUser(id, userData);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number): Promise<void>{
        return this.userService.deleteUser(id);
    }
    
}


