import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News) private newsRepository: Repository<News>,
  ) {}

  async create(dto: CreateNewsDto) {
    const newsFound = await this.newsRepository.findOne({
      where: {
        newsTitle: dto.newsTitle,
      },
    });
    if (newsFound) {
      return new HttpException('News already exists', HttpStatus.CONFLICT);
    }
    const newNews = this.newsRepository.create(dto);
    return this.newsRepository.save(newNews);
  }

  findAll() {
    return this.newsRepository.find();
  }

  async findOne(id: string) {
    const newsFound = await this.newsRepository.findOne({
      where: {
        id,
      },
    });
    if (!newsFound) {
      return new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
    return newsFound;
  }

  async update(id: string, dto: UpdateNewsDto) {
    const newsFound = await this.newsRepository.findOne({
      where: {
        id,
      },
    });
    if (!newsFound) {
      return new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
    const updatedNews = Object.assign(newsFound, dto);
    return this.newsRepository.save(updatedNews);
  }

  async remove(id: string) {
    const result = await this.newsRepository.delete({ id });
    if (result.affected === 0) {
      return new HttpException('News not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
