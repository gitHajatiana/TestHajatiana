import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityModele } from './entity.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntityService {
    constructor(@InjectRepository(EntityModele)
    private entityRepository: Repository<EntityModele>,
){}

    async findAll(): Promise<EntityModele[]>{
        return this.entityRepository.find();
    }

    async findById(id: number): Promise<EntityModele | null>{
        return this.entityRepository.findOne({where:{id}});
    }

    async updateEntity(id: number, entityData: Partial<EntityModele>): Promise<EntityModele>{
        await this.entityRepository.update(id, entityData);
        const updateEntity = await this.entityRepository.findOne({where:{id}});
        return updateEntity;
    }

    async addEntity(entityData: Partial<EntityModele>): Promise<EntityModele>{
        const entity = this.entityRepository.create(entityData);
        return await this.entityRepository.save(entity);
    }

    async deleteEntity(id: number): Promise<void>{
        await this.entityRepository.delete(id);
    }
 
}
