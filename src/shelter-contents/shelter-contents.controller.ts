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
import { ShelterContentsService } from './shelter-contents.service';
import { CreateShelterContentDto } from './dto/create-shelter-content.dto';
import { UpdateShelterContentDto } from './dto/update-shelter-content.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ShelterContent } from './entities/shelter-content.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('shelter-contents')
@ApiTags('shelter-contents')
export class ShelterContentsController {
  constructor(
    private readonly shelterContentsService: ShelterContentsService,
  ) {}

  @UseGuards(JwtGuard)
  @Post()
  @ApiCreatedResponse({ type: ShelterContent })
  create(@Body() dto: CreateShelterContentDto) {
    return this.shelterContentsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: ShelterContent, isArray: true })
  findAll() {
    return this.shelterContentsService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiOkResponse({ type: ShelterContent })
  findOne(@Param('id') id: string) {
    return this.shelterContentsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: ShelterContent })
  update(@Param('id') id: string, @Body() dto: UpdateShelterContentDto) {
    return this.shelterContentsService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: ShelterContent })
  remove(@Param('id') id: string) {
    return this.shelterContentsService.remove(id);
  }
}
