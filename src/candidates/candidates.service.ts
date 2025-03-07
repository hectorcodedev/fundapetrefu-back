import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { Candidate } from './entities/candidate.entity';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private candidateRepository: Repository<Candidate>,
  ) {}

  async create(dto: CreateCandidateDto) {
    const candidateFound = await this.candidateRepository.findOne({
      where: {
        dniNumber: dto.dniNumber,
      },
    });
    if (candidateFound) {
      return new HttpException('Candidate already exists', HttpStatus.CONFLICT);
    }
    const newCandidate = this.candidateRepository.create(dto);
    return this.candidateRepository.save(newCandidate);
  }

  findAll() {
    return this.candidateRepository.find();
  }

  async findOne(id: string) {
    const candidateFound = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });
    if (!candidateFound) {
      return new HttpException('Candidate not found', HttpStatus.NOT_FOUND);
    }
    return candidateFound;
  }

  async update(id: string, dto: UpdateCandidateDto) {
    const candidateFound = await this.candidateRepository.findOne({
      where: {
        id,
      },
    });
    if (!candidateFound) {
      return new HttpException('Candidate not found', HttpStatus.NOT_FOUND);
    }
    const updatedCandidate = Object.assign(candidateFound, dto);
    return this.candidateRepository.save(updatedCandidate);
  }

  async remove(id: string) {
    const result = await this.candidateRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Candidate not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
