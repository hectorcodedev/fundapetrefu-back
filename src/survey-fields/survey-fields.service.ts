import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSurveyFieldDto } from './dto/create-survey-field.dto';
import { UpdateSurveyFieldDto } from './dto/update-survey-field.dto';
import { SurveyField } from './entities/survey-field.entity';

@Injectable()
export class SurveyFieldsService {
  constructor(
    @InjectRepository(SurveyField)
    private surveyRepository: Repository<SurveyField>,
  ) {}

  async create(dto: CreateSurveyFieldDto) {
    const candidateFound = await this.surveyRepository.findOne({
      where: {
        dniNumber: dto.dniNumber,
      },
    });
    if (candidateFound) {
      return new HttpException('User already exists', HttpStatus.CONFLICT);
    }
    const newRecord = this.surveyRepository.create(dto);
    return this.surveyRepository.save(newRecord);
  }

  findAll() {
    return this.surveyRepository.find();
  }

  async findOne(id: string) {
    const surveyRecordFound = await this.surveyRepository.findOne({
      where: {
        id,
      },
    });
    if (!surveyRecordFound) {
      return new HttpException('Record not found', HttpStatus.NOT_FOUND);
    }
    return surveyRecordFound;
  }

  async update(id: string, dto: UpdateSurveyFieldDto) {
    const surveyRecordFound = await this.surveyRepository.findOne({
      where: {
        id,
      },
    });
    if (!surveyRecordFound) {
      return new HttpException('Record not found', HttpStatus.NOT_FOUND);
    }
    const updatedSurveyRecord = Object.assign(surveyRecordFound, dto);
    return this.surveyRepository.save(updatedSurveyRecord);
  }

  async remove(id: string) {
    const result = await this.surveyRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Record not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
