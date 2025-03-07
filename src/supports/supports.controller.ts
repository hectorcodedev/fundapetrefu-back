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
import { SupportsService } from './supports.service';
import { CreateSupportDto } from './dto/create-support.dto';
import { UpdateSupportDto } from './dto/update-support.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Support } from './entities/support.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('supports')
export class SupportsController {
  constructor(private readonly supportsService: SupportsService) {}

  @UseGuards(JwtGuard)
  @Post()
  @ApiCreatedResponse({ type: Support })
  create(@Body() dto: CreateSupportDto) {
    return this.supportsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Support, isArray: true })
  findAll() {
    return this.supportsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: Support })
  findOne(@Param('id') id: string) {
    return this.supportsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: Support })
  update(@Param('id') id: string, @Body() dto: UpdateSupportDto) {
    return this.supportsService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: Support })
  remove(@Param('id') id: string) {
    return this.supportsService.remove(id);
  }
}
