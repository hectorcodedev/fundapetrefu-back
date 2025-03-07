import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { News } from './entities/news.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('news')
@ApiTags('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @UseGuards(JwtGuard)
  @Post()
  @ApiCreatedResponse({ type: News })
  create(@Body() dto: CreateNewsDto) {
    return this.newsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: News, isArray: true })
  findAll() {
    return this.newsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: News })
  findOne(@Param('id') id: string) {
    return this.newsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: News })
  update(@Param('id') id: string, @Body() dto: UpdateNewsDto) {
    return this.newsService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: News })
  remove(@Param('id') id: string) {
    return this.newsService.remove(id);
  }
}
