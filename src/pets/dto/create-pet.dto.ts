import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import {
  PetAgeOptions,
  PetGenderOptions,
  PetSpeciesOptions,
  PetSizeOptions,
  PetSpecialConditionOptions,
} from '../entities/pet.entity';

export class CreatePetDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  petName: string;

  @ApiProperty()
  @IsEnum(PetAgeOptions)
  @IsNotEmpty()
  petAge: PetAgeOptions;

  @ApiProperty()
  @IsEnum(PetGenderOptions)
  @IsNotEmpty()
  petGender: PetGenderOptions;

  @ApiProperty()
  @IsEnum(PetSpeciesOptions)
  @IsNotEmpty()
  petSpecies: PetSpeciesOptions;

  @ApiProperty()
  @IsEnum(PetSizeOptions)
  @IsNotEmpty()
  petSize: PetSizeOptions;

  @ApiProperty()
  @IsEnum(PetSpecialConditionOptions)
  @IsNotEmpty()
  petSpecialCondition: PetSpecialConditionOptions;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isAdopted: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  isFeatured: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  featuredImg?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  adopterDniNumber?: number;
}
