import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  AnyKidsOptions,
  HadPetOptions,
  HavePetOptions,
  HouseTypeOptions,
  ReasonsOptions,
  TimeAloneOptions,
} from '../entities/survey-field.entity';

export class UpdateSurveyFieldDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  dniNumber: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  familyComposition?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  adultsQty?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  childrenQty?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  babiesQty?: number;

  @ApiProperty()
  @IsEnum(HouseTypeOptions)
  @IsOptional()
  houseType?: HouseTypeOptions;

  @ApiProperty()
  @IsEnum(TimeAloneOptions)
  @IsOptional()
  timeAlone?: TimeAloneOptions;

  @ApiProperty()
  @IsEnum(AnyKidsOptions)
  @IsOptional()
  anyKids?: AnyKidsOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  childrenAges?: string;

  @ApiProperty()
  @IsEnum(ReasonsOptions)
  @IsOptional()
  reasons?: ReasonsOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  reasonsOther?: string;

  @ApiProperty()
  @IsEnum(HadPetOptions)
  @IsOptional()
  hadPet?: HadPetOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  hadPetOther?: string;

  @ApiProperty()
  @IsEnum(HavePetOptions)
  @IsOptional()
  havePet?: HavePetOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  havePetOther?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  getFundapetInfo?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  adoptReason?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ref1Name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ref1Cellphone?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ref2Name?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ref2Cellphone?: string;
}
