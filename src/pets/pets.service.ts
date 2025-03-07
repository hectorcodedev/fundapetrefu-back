import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) {}

  async create(dto: CreatePetDto) {
    const petFound = await this.petRepository.findOne({
      where: {
        petName: dto.petName,
      },
    });
    if (petFound) {
      return new HttpException('Pet already exists', HttpStatus.CONFLICT);
    }
    const newPet = this.petRepository.create(dto);
    return this.petRepository.save(newPet);
  }

  findAll() {
    return this.petRepository.find({
      relations: ['petImages'],
    });
  }

  async findOne(id: string) {
    const petFound = await this.petRepository.findOne({
      where: {
        id,
      },
      relations: ['petImages'],
    });
    if (!petFound) {
      return new HttpException('Pet not found', HttpStatus.NOT_FOUND);
    }
    return petFound;
  }

  findFeatured() {
    return this.petRepository.find({
      where: {
        isAdopted: false,
        isFeatured: true,
      },
    });
  }

  findAdopted() {
    return this.petRepository.find({
      where: {
        isAdopted: true,
      },
    });
  }

  async update(id: string, dto: UpdatePetDto) {
    const petFound = await this.petRepository.findOne({
      where: {
        id,
      },
    });
    if (!petFound) {
      return new HttpException('Pet not found', HttpStatus.NOT_FOUND);
    }
    const updatedPet = Object.assign(petFound, dto);
    return this.petRepository.save(updatedPet);
  }

  async remove(id: string) {
    const result = await this.petRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Pet not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
