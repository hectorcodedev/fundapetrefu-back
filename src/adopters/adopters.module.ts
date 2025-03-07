import { Module } from '@nestjs/common';
import { AdoptersService } from './adopters.service';
import { AdoptersController } from './adopters.controller';
import { Adopter } from './entities/adopter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Adopter])],
  controllers: [AdoptersController],
  providers: [AdoptersService],
  exports: [AdoptersService],
})
export class AdoptersModule {}
