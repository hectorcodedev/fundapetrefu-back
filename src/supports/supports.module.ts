import { Module } from '@nestjs/common';
import { SupportsService } from './supports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Support } from './entities/support.entity';
import { SupportsController } from './supports.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Support])],
  controllers: [SupportsController],
  providers: [SupportsService],
})
export class SupportsModule {}
