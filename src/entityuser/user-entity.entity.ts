import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { User } from "../user/user.entity";
import { EntityModele } from "src/entity/entity.entity";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => EntityModele, (entityModele) => entityModele.userEntities)
    entity: EntityModele;

    @ManyToOne(() => User, (user) => user.userEntities)
    user: User;


}