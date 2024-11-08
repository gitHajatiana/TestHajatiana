import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "../entityuser/user-entity.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 80, nullable: false })
    name: string;

    @Column({type: 'varchar', length: 50 })
    firstName: string;

    @Column({type : 'varchar', length: 2 })
    language: string;

    @Column({type: 'varchar', length: 100, nullable: false})
    email: string;

    @Column({type: 'varchar', length: 250, nullable: false })
    password: string;

    @Column({type: 'datetime', nullable: true })
    lastLogin: Date;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(()=> UserEntity, (userEntity) => userEntity.entity, { cascade: true})
  userEntities: UserEntity[];

}