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
import { StoriesService } from './stories.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Story } from './entities/story.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('stories')
@ApiTags('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @UseGuards(JwtGuard)
  @Post()
  @ApiCreatedResponse({ type: Story })
  create(@Body() dto: CreateStoryDto) {
    return this.storiesService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Story, isArray: true })
  findAll() {
    return this.storiesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Story })
  findOne(@Param('id') id: string) {
    return this.storiesService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: Story })
  update(@Param('id') id: string, @Body() dto: UpdateStoryDto) {
    return this.storiesService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: Story })
  remove(@Param('id') id: string) {
    return this.storiesService.remove(id);
  }
}
