import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto, UserUpdateDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  create(body: UserCreateDto) {
    return this.usersRepository.save(body);
  }

  async update(id: number, body: UserUpdateDto) {
    const { phoneNumber, name, nickname } = body;

    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('유저정보를 찾을 수 없습니다.');
    }

    user.name = name;
    user.nickname = nickname;
    user.phoneNumber = phoneNumber;

    return this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('유저정보를 찾을 수 없습니다.');
    }

    await this.usersRepository.softRemove(user);
  }
}
