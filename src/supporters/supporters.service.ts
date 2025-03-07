import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupporterDto } from './dto/create-supporter.dto';
import { UpdateSupporterDto } from './dto/update-supporter.dto';
import { Supporter } from './entities/supporter.entity';

@Injectable()
export class SupportersService {
  constructor(
    @InjectRepository(Supporter)
    private supporterRepository: Repository<Supporter>,
  ) {}

  async create(dto: CreateSupporterDto) {
    const supporterFound = await this.supporterRepository.findOne({
      where: {
        dniNumber: dto.dniNumber,
      },
    });
    if (supporterFound) {
      return new HttpException('Supporter already exists', HttpStatus.CONFLICT);
    }
    const newSupporter = this.supporterRepository.create(dto);
    return this.supporterRepository.save(newSupporter);
  }

  findAll() {
    return this.supporterRepository.find();
  }

  async findOne(id: string) {
    const supporterFound = await this.supporterRepository.findOne({
      where: {
        id,
      },
    });
    if (!supporterFound) {
      return new HttpException('Supporter not found', HttpStatus.NOT_FOUND);
    }
    return supporterFound;
  }

  async update(id: string, dto: UpdateSupporterDto) {
    const supporterFound = await this.supporterRepository.findOne({
      where: {
        id,
      },
    });
    if (!supporterFound) {
      return new HttpException('Candidate not found', HttpStatus.NOT_FOUND);
    }
    const updatedCandidate = Object.assign(supporterFound, dto);
    return this.supporterRepository.save(updatedCandidate);
  }

  async remove(id: string) {
    const result = await this.supporterRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Supporter not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
