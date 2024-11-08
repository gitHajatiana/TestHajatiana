import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EntityService } from './entity.service';
import { EntityModele } from './entity.entity';

@Controller('entities')
export class EntityController {
  constructor(private readonly entityService: EntityService) {}

  @Get()
  async findAll() : Promise<EntityModele[]>{
    return this.entityService.findAll();
  } 

  @Get(':id')
  async findById(@Param('id') id : number): Promise<EntityModele | null>{
    return this.entityService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() entityData: Partial<EntityModele>): Promise<EntityModele>{
    return this.entityService.updateEntity(id, entityData);
  }
  
  @Post()
  async create(@Body() entityData: Partial<EntityModele>): Promise<EntityModele>{
    return this.entityService.addEntity(entityData);
  }

  @Delete(':id')
  async deleteEntity(@Param('id') id: number): Promise<void>{
    return this.entityService.deleteEntity(id);
  }
  
}

