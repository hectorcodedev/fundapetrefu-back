import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateShelterContentDto } from './dto/create-shelter-content.dto';
import { UpdateShelterContentDto } from './dto/update-shelter-content.dto';
import { ShelterContent } from './entities/shelter-content.entity';

@Injectable()
export class ShelterContentsService {
  constructor(
    @InjectRepository(ShelterContent)
    private shelterContentRepository: Repository<ShelterContent>,
  ) {}

  async create(dto: CreateShelterContentDto) {
    const infoFound = await this.shelterContentRepository.findOne({
      where: {
        infoTitle: dto.infoTitle,
      },
    });
    if (infoFound) {
      return new HttpException(
        'ShelterContent already exists',
        HttpStatus.CONFLICT,
      );
    }
    const newShelterContent = this.shelterContentRepository.create(dto);
    return this.shelterContentRepository.save(newShelterContent);
  }

  findAll() {
    return this.shelterContentRepository.find();
  }

  async findOne(id: string) {
    const infoFound = await this.shelterContentRepository.findOne({
      where: {
        id,
      },
    });
    if (!infoFound) {
      return new HttpException(
        'ShelterContent not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return infoFound;
  }

  async update(id: string, dto: UpdateShelterContentDto) {
    const infoFound = await this.shelterContentRepository.findOne({
      where: {
        id,
      },
    });
    if (!infoFound) {
      return new HttpException(
        'ShelterContent not found',
        HttpStatus.NOT_FOUND,
      );
    }
    const updatedShelterContent = Object.assign(infoFound, dto);
    return this.shelterContentRepository.save(updatedShelterContent);
  }

  async remove(id: string) {
    const result = await this.shelterContentRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException(
        'ShelterContent not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return result;
  }
}
