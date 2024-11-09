import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EntityuserService } from './entityuser.service';
import { UserEntity } from './user-entity.entity';


@Controller('user-entities')
export class EntityuserController {
    constructor(private readonly entityUserService: EntityuserService){}

    @Get()
    async findAll(): Promise<UserEntity[]>{
        return this.entityUserService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id : number ): Promise<UserEntity| null>{
        return this.entityUserService.findById(id);
    }

    @Post(':idUser/:idEntity')
    async adduserEntity(@Param('idUser') idUser : number,@Param('idEntity') idEntity: number): Promise<UserEntity>{
        return this.entityUserService.addEntityUser(idUser,idEntity);
    }

    @Put(':id')
    async updateuserEntity(@Param('id') id: number, @Body() userentityData: Partial<UserEntity>): Promise<UserEntity>{
        return this.entityUserService.updateEntityUser(id,userentityData);
    }

    @Delete(':id')
    async deleteEntityUser(@Param('id') id: number): Promise<void>{
        return this.entityUserService.deleteUserEntity(id);
    }
}
