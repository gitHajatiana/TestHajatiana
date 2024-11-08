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

    async addEntityUser(userEntityData: Partial<UserEntity>): Promise<UserEntity>{
        const userEntity = this.userEntityRepository.create(userEntityData);
        return await this.userEntityRepository.save(userEntity);
    }



    async deleteUserEntity(id: number): Promise<void>{
        const result = await this.entityModeleRepository.delete(id);
        if(await result.affected ===0){
            throw new NotFoundException(`Post avec l'ID ${id} non trouvé`);
        }
    }
}
