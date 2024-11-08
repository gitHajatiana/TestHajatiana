import { Module } from '@nestjs/common';
import { EntityController } from './entity.controller';
import { EntityService } from './entity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityModele } from './entity.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EntityModele])],
  controllers: [EntityController],
  providers: [EntityService]
})
export class EntityModule {}
