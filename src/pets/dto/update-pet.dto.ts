import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
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

export class UpdatePetDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  petName?: string;

  @ApiProperty()
  @IsEnum(PetAgeOptions)
  @IsOptional()
  petAge?: PetAgeOptions;

  @ApiProperty()
  @IsEnum(PetGenderOptions)
  @IsOptional()
  petGender?: PetGenderOptions;

  @ApiProperty()
  @IsEnum(PetSpeciesOptions)
  @IsOptional()
  petSpecies?: PetSpeciesOptions;

  @ApiProperty()
  @IsEnum(PetSizeOptions)
  @IsOptional()
  petSize?: PetSizeOptions;

  @ApiProperty()
  @IsEnum(PetSpecialConditionOptions)
  @IsOptional()
  petSpecialCondition?: PetSpecialConditionOptions;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isAdopted?: boolean;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isFeatured?: boolean;

  @ApiProperty()
  @IsString()
  @IsOptional()
  featuredImg?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  adopterDniNumber?: number;
}
