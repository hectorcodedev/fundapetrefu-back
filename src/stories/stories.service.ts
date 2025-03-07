import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './entities/story.entity';

@Injectable()
export class StoriesService {
  constructor(
    @InjectRepository(Story) private storyRepository: Repository<Story>,
  ) {}

  async create(dto: CreateStoryDto) {
    const storyFound = await this.storyRepository.findOne({
      where: {
        storyTitle: dto.storyTitle,
      },
    });
    if (storyFound) {
      return new HttpException('Story already exists', HttpStatus.CONFLICT);
    }
    const newStory = this.storyRepository.create(dto);
    return this.storyRepository.save(newStory);
  }

  findAll() {
    return this.storyRepository.find();
  }

  async findOne(id: string) {
    const storyFound = await this.storyRepository.findOne({
      where: {
        id,
      },
    });
    if (!storyFound) {
      return new HttpException('Story not found', HttpStatus.NOT_FOUND);
    }
    return storyFound;
  }

  async update(id: string, dto: UpdateStoryDto) {
    const storyFound = await this.storyRepository.findOne({
      where: {
        id,
      },
    });
    if (!storyFound) {
      return new HttpException('Story not found', HttpStatus.NOT_FOUND);
    }
    const updatedStory = Object.assign(storyFound, dto);
    return this.storyRepository.save(updatedStory);
  }

  async remove(id: string) {
    const result = await this.storyRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('Story not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
