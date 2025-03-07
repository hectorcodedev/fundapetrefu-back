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
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AdoptersService } from './adopters.service';
import { CreateAdopterDto } from './dto/create-adopter.dto';
import { UpdateAdopterDto } from './dto/update-adopter.dto';
import { Adopter } from './entities/adopter.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('adopters')
@UseGuards(JwtGuard)
export class AdoptersController {
  constructor(private readonly adoptersService: AdoptersService) {}

  @Post()
  @ApiCreatedResponse({ type: Adopter })
  create(@Body() dto: CreateAdopterDto) {
    return this.adoptersService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Adopter, isArray: true })
  findAll() {
    return this.adoptersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Adopter })
  findOne(@Param('id') id: string) {
    return this.adoptersService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Adopter })
  update(@Param('id') id: string, @Body() dto: UpdateAdopterDto) {
    return this.adoptersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Adopter })
  remove(@Param('id') id: string) {
    return this.adoptersService.remove(id);
  }
}
