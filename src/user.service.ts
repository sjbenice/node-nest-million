import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    async resetProblems(): Promise<number> {
        const usersWithProblems = await this.userRepository.find({ where: { problem: true } });
        await this.userRepository.update({ problem: true }, { problem: false });

        return usersWithProblems.length;
    }

    async bulkResetProblems(): Promise<any> {
        const result = await this.userRepository.createQueryBuilder()
            .update(User)
            .set({ problem: false })
            .where("problem = true")
            .execute();

        return result;
    }
}
