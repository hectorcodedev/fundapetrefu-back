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
import { SupportersService } from './supporters.service';
import { CreateSupporterDto } from './dto/create-supporter.dto';
import { UpdateSupporterDto } from './dto/update-supporter.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Supporter } from './entities/supporter.entity';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('supporters')
export class SupportersController {
  constructor(private readonly supportersService: SupportersService) {}

  @Post()
  @ApiCreatedResponse({ type: Supporter })
  create(@Body() dto: CreateSupporterDto) {
    return this.supportersService.create(dto);
  }

  @UseGuards(JwtGuard)
  @Get()
  @ApiOkResponse({ type: Supporter, isArray: true })
  findAll() {
    return this.supportersService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiOkResponse({ type: Supporter })
  findOne(@Param('id') id: string) {
    return this.supportersService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: Supporter })
  update(@Param('id') id: string, @Body() dto: UpdateSupporterDto) {
    return this.supportersService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: Supporter })
  remove(@Param('id') id: string) {
    return this.supportersService.remove(id);
  }
}
