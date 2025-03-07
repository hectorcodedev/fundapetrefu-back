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
import { PetImagesService } from './pet-images.service';
import { CreatePetImageDto } from './dto/create-pet-image.dto';
import { UpdatePetImageDto } from './dto/update-pet-image.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PetImage } from './entities/pet-image.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('pet-images')
@ApiTags('pet-images')
export class PetImagesController {
  constructor(private readonly petImagesService: PetImagesService) {}

  @UseGuards(JwtGuard)
  @Post()
  @ApiCreatedResponse({ type: PetImage })
  create(@Body() dto: CreatePetImageDto) {
    return this.petImagesService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: PetImage, isArray: true })
  findAll() {
    return this.petImagesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PetImage })
  findOne(@Param('id') id: string) {
    return this.petImagesService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: PetImage })
  update(@Param('id') id: string, @Body() dto: UpdatePetImageDto) {
    return this.petImagesService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: PetImage })
  remove(@Param('id') id: string) {
    return this.petImagesService.remove(id);
  }
}
