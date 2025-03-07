import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { Support } from './entities/support.entity';

@Injectable()
export class SupportsService {
  constructor(
    @InjectRepository(Support) private supportRepository: Repository<Support>,
  ) {}

  async create(dto: CreateSupportDto) {
    const supportFound = await this.supportRepository.findOne({
      where: {
        supportTitle: dto.supportTitle,
      },
    });
    if (supportFound) {
      return new HttpException('Support already exists', HttpStatus.CONFLICT);
    }
    const newSupport = this.supportRepository.create(dto);
    return this.supportRepository.save(newSupport);
  }

  findAll() {
    return this.supportRepository.find();
  }

  async findOne(id: string) {
    const supportFound = await this.supportRepository.findOne({
      where: {
        id,
      },
    });
    if (!supportFound) {
      return new HttpException('Support not found', HttpStatus.NOT_FOUND);
    }
    return supportFound;
  }

  async update(id: string, dto: UpdateSupportDto) {
    const supportFound = await this.supportRepository.findOne({
      where: {
        id,
      },
    });
    if (!supportFound) {
      return new HttpException('Support not found', HttpStatus.NOT_FOUND);
    }
    const updatedSupport = Object.assign(supportFound, dto);
    return this.supportRepository.save(updatedSupport);
  }

  async remove(id: string) {
    const result = await this.supportRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Support not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
