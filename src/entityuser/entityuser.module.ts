import { Module } from '@nestjs/common';
import { EntityuserController } from './entityuser.controller';
import { EntityuserService } from './entityuser.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user-entity.entity';
import { User } from 'src/user/user.entity';
import { EntityModele } from 'src/entity/entity.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity,User,EntityModele])],
  controllers: [EntityuserController],
  providers: [EntityuserService]
})
export class EntityuserModule {}
