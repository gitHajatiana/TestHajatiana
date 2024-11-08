import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}

    async findAll(): Promise<User[]>{
        return this.userRepository.find();
    }

    async findById(id : number): Promise<User | null>{
        return this.userRepository.findOne({where:{id}});
    }

    async addUser(userData : Partial<User>): Promise<User>{
        userData.createdAt = (userData.createdAt != null ? userData.createdAt :new Date());
        userData.lastLogin = new Date(); 
        const user = this.userRepository.create(userData);
        return await this.userRepository.save(user); 
    }

    async updateUser(id: number, userData: Partial<User>): Promise<User>{
        await this.userRepository.update(id, userData);
        const updateUser = await this.userRepository.findOne({where:{id}});
        return updateUser;
    }

    async deleteUser(id: number): Promise<void>{
        await this.userRepository.delete(id);
    }
}
