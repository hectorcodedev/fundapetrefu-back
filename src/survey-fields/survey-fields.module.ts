import { Module } from '@nestjs/common';
import { SurveyFieldsService } from './survey-fields.service';
import { SurveyFieldsController } from './survey-fields.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyField } from './entities/survey-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyField])],
  controllers: [SurveyFieldsController],
  providers: [SurveyFieldsService],
})
export class SurveyFieldsModule {}
