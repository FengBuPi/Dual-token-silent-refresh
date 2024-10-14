import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/User.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }
  // 根据用户名称查找用户
  async getUserByUsername(username: string): Promise<User | null> {
    const res = await this.userRepository.findOne({ where: { username } });
    return res
  }

  // 根据id查询一个用户
  async getUserById(id: number): Promise<User | null> {
    const res = await this.userRepository.findOne({ where: { id } }) // 根据id查询单个
    return res
  }
}
