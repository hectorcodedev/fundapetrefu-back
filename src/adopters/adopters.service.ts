import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdopterDto } from './dto/create-adopter.dto';
import { UpdateAdopterDto } from './dto/update-adopter.dto';
import { Adopter } from './entities/adopter.entity';

@Injectable()
export class AdoptersService {
  constructor(
    @InjectRepository(Adopter) private adopterRepository: Repository<Adopter>,
  ) {}

  async create(dto: CreateAdopterDto) {
    const adopterFound = await this.adopterRepository.findOne({
      where: {
        adopterDniNumber: dto.adopterDniNumber,
      },
    });
    if (adopterFound) {
      return new HttpException('Adopter already exists', HttpStatus.CONFLICT);
    }
    const newAdopter = this.adopterRepository.create(dto);
    return this.adopterRepository.save(newAdopter);
  }

  findAll() {
    return this.adopterRepository.find({
      relations: ['adoptedPets'],
    });
  }

  async findOne(id: string) {
    const adopterFound = await this.adopterRepository.findOne({
      where: {
        id,
      },
      relations: ['adoptedPets'],
    });
    if (!adopterFound) {
      return new HttpException('Adopter not found', HttpStatus.NOT_FOUND);
    }
    return adopterFound;
  }

  async update(id: string, dto: UpdateAdopterDto) {
    const adopterFound = await this.adopterRepository.findOne({
      where: {
        id,
      },
    });
    if (!adopterFound) {
      return new HttpException('Adopter not found', HttpStatus.NOT_FOUND);
    }
    const updatedAdopter = Object.assign(adopterFound, dto);
    return this.adopterRepository.save(updatedAdopter);
  }

  async remove(id: string) {
    const result = await this.adopterRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Adopter not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
