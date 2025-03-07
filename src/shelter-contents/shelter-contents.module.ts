import { Module } from '@nestjs/common';
import { ShelterContentsService } from './shelter-contents.service';
import { ShelterContentsController } from './shelter-contents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterContent } from './entities/shelter-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShelterContent])],
  controllers: [ShelterContentsController],
  providers: [ShelterContentsService],
})
export class ShelterContentsModule {}
