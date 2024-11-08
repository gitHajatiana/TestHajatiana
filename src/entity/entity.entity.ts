import { UserEntity } from 'src/entityuser/user-entity.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';


@Entity()
export class EntityModele {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 20 })
  siret: string;

  @Column({ type: 'varchar', length: 20 })
  keyLicence: string;

  @Column({ type: 'varchar', length: 100 })
  website: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(()=> UserEntity, (userEntity) => userEntity.entity, {cascade: true})
  userEntities: UserEntity[];
}
