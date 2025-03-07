import { Module } from '@nestjs/common';
import { SupportersService } from './supporters.service';
import { SupportersController } from './supporters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supporter } from './entities/supporter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Supporter])],
  controllers: [SupportersController],
  providers: [SupportersService],
})
export class SupportersModule {}
