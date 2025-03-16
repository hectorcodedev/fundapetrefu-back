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
import { Transform } from 'class-transformer';

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
  @Transform(({ value }) => value === 'true' || value === true)
  @IsBoolean()
  @IsOptional()
  isAdopted?: boolean;

  @ApiProperty()
  @Transform(({ value }) => value === 'true' || value === true)
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
  @Transform(({ value }) => (value === "" ? null : Number(value)))
  @IsNumber()
  @IsOptional()
  adopterDniNumber?: number | null;
}
