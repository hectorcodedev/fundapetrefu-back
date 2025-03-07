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
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Pet } from './entities/pet.entity';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('pets')
@ApiTags('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}
  @UseGuards(JwtGuard)
  @Post()
  @ApiCreatedResponse({ type: Pet })
  create(@Body() dto: CreatePetDto) {
    return this.petsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: Pet, isArray: true })
  findAll() {
    return this.petsService.findAll();
  }

  @Get('featured')
  @ApiOkResponse({ type: Pet, isArray: true })
  findFeatured() {
    return this.petsService.findFeatured();
  }

  @UseGuards(JwtGuard)
  @Get('adopted')
  @ApiOkResponse({ type: Pet, isArray: true })
  findAdopted() {
    return this.petsService.findAdopted();
  }

  @Get(':id')
  @ApiOkResponse({ type: Pet })
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOkResponse({ type: Pet })
  update(@Param('id') id: string, @Body() dto: UpdatePetDto) {
    return this.petsService.update(id, dto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOkResponse({ type: Pet })
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
