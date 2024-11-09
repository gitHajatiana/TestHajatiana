import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user-entity.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { EntityModele } from 'src/entity/entity.entity';

@Injectable()
export class EntityuserService {

    constructor(
        @InjectRepository(UserEntity)
        private userEntityRepository: Repository<UserEntity>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
        @InjectRepository(EntityModele)
        private entityModeleRepository: Repository<EntityModele>,
    ){}


    async findAll(): Promise<UserEntity[]>{
        return this.userEntityRepository.find({relations: ['user','entity']});
    }

    async findById(id: number): Promise<UserEntity>{
        return this.userEntityRepository.findOne({where:{id},relations: ['user','entity']});
    }

    async addEntityUser(idUser: number,idEntity:number): Promise<UserEntity>{
        //Recuperation de l'user et l'entity par son id
        const user = await this.userRepository.findOneBy({id:idUser});
        const entity = await this.entityModeleRepository.findOneBy({id:idEntity});

        
        const entityUser = this.userEntityRepository.create({entity,user});
        return this.userEntityRepository.save(entityUser);
        
    }

    async updateEntityUser(id:number, entityUserData: Partial<UserEntity>):Promise<UserEntity>{
        await this.userEntityRepository.update(id, entityUserData);
        const updateEntityUser = await this.userEntityRepository.findOne({where:{id}});
        return updateEntityUser;
    }

    async deleteUserEntity(id: number): Promise<void>{
        const result = await this.userEntityRepository.delete(id);
        if(result.affected ===0){
            throw new NotFoundException(`Post avec l'ID ${id} non trouvé`);
        }
    }
}
