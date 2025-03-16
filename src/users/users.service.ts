import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as argon from 'argon2';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  async create(dto: CreateUserDto) {
    const hashedPassword = await argon.hash(dto.password);
    const userFound = await this.userRepository.findOne({
      where: {
        email: dto.email,
      },
    });
    if (userFound) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const newUser = await this.userRepository.create({
      id: dto.id,
      email: dto.email,
      password: hashedPassword,
      firstName: dto.firstName,
      lastName: dto.lastName,
      dniNumber: dto.dniNumber,
    });
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    delete userFound.password;
    return userFound;
  }

  async update(id: string, dto: UpdateUserDto) {
    const hashedPassword = await argon.hash(dto.password);
    const userFound = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    if (!userFound) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const updatedUser = Object.assign(userFound, {
      email: dto.email,
      password: hashedPassword,
      firstName: dto.firstName,
      lastName: dto.lastName,
      dniNumber: dto.dniNumber,
    });
    return this.userRepository.save(updatedUser);
  }

  async remove(id: string) {
    const result = await this.userRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  async resetPassword(dniNumber: string) {
    const dniNumberAsNumber = Number(dniNumber);

    if (isNaN(dniNumberAsNumber)) {
      throw new HttpException('DNI inválido', HttpStatus.BAD_REQUEST);
    }

    const userFound = await this.userRepository.findOne({
      where: {
        dniNumber: dniNumberAsNumber,
      },
    });
    if (!userFound) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const newPassword = dniNumberAsNumber.toString();
    const hashedPassword = await argon.hash(newPassword);

    userFound.password = hashedPassword;
    await this.userRepository.save(userFound);

    return { message: 'Password reset successfully', newPassword };
  }
}
