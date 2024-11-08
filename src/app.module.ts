import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserEntity } from './entityuser/user-entity.entity';
import { UserModule } from './user/user.module';
import { EntityModele } from './entity/entity.entity';
import { EntityModule } from './entity/entity.module';
import { EntityuserModule } from './entityuser/entityuser.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'testuserentity5',
      entities: [User,EntityModele,UserEntity],
      synchronize: true,
    }),
    UserModule,
    EntityModule,
    EntityuserModule
  ],
})
export class AppModule {}
