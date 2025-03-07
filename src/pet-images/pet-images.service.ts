import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetsService } from 'src/pets/pets.service';
import { Repository } from 'typeorm';
import { CreatePetImageDto } from './dto/create-pet-image.dto';
import { UpdatePetImageDto } from './dto/update-pet-image.dto';
import { PetImage } from './entities/pet-image.entity';

@Injectable()
export class PetImagesService {
  constructor(
    private petService: PetsService,
    @InjectRepository(PetImage)
    private petImageRepository: Repository<PetImage>,
  ) {}

  async create(dto: CreatePetImageDto) {
    const petImageFound = await this.petImageRepository.findOne({
      where: {
        petImageName: dto.petImageName,
      },
    });
    if (petImageFound) {
      return new HttpException('PetImage already exists', HttpStatus.CONFLICT);
    }
    const petFound = await this.petService.findOne(dto.petName);
    if (!petFound) {
      return new HttpException('Pet not found', HttpStatus.NOT_FOUND);
    }
    const newPetImage = this.petImageRepository.create(dto);
    return this.petImageRepository.save(newPetImage);
  }

  findAll() {
    return this.petImageRepository.find({
      relations: ['pet'],
    });
  }

  async findOne(id: string) {
    const petImageFound = await this.petImageRepository.findOne({
      where: {
        id,
      },
      relations: ['pet'],
    });
    if (!petImageFound) {
      return new HttpException('PetImage not found', HttpStatus.NOT_FOUND);
    }
    return petImageFound;
  }

  async update(id: string, dto: UpdatePetImageDto) {
    const petImageFound = await this.petImageRepository.findOne({
      where: {
        id,
      },
    });
    if (!petImageFound) {
      return new HttpException('PetImage not found', HttpStatus.NOT_FOUND);
    }
    const updatedPetImage = Object.assign(petImageFound, dto);
    return this.petImageRepository.save(updatedPetImage);
  }

  async remove(id: string) {
    const result = await this.petImageRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('PetImage not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
