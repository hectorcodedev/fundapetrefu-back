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
import { SurveyFieldsService } from './survey-fields.service';
import { CreateSurveyFieldDto } from './dto/create-survey-field.dto';
import { UpdateSurveyFieldDto } from './dto/update-survey-field.dto';
import { SurveyField } from './entities/survey-field.entity';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('survey-fields')
export class SurveyFieldsController {
  constructor(private readonly surveyFieldsService: SurveyFieldsService) {}

  @Post()
  @ApiCreatedResponse({ type: SurveyField })
  create(@Body() dto: CreateSurveyFieldDto) {
    return this.surveyFieldsService.create(dto);
  }

  @UseGuards(JwtGuard)
  @Get()
  @ApiOkResponse({ type: SurveyField, isArray: true })
  findAll() {
    return this.surveyFieldsService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  @ApiOkResponse({ type: SurveyField })
  findOne(@Param('id') id: string) {
    return this.surveyFieldsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: SurveyField })
  update(@Param('id') id: string, @Body() dto: UpdateSurveyFieldDto) {
    return this.surveyFieldsService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: SurveyField })
  remove(@Param('id') id: string) {
    return this.surveyFieldsService.remove(id);
  }
}
