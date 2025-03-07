import { Module } from '@nestjs/common';
import { PetImagesService } from './pet-images.service';
import { PetImagesController } from './pet-images.controller';
import { PetImage } from './entities/pet-image.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsModule } from '../pets/pets.module';

@Module({
  imports: [TypeOrmModule.forFeature([PetImage]), PetsModule],
  controllers: [PetImagesController],
  providers: [PetImagesService],
})
export class PetImagesModule {}
