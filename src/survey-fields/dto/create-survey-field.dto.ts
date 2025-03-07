import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  AnyKidsOptions,
  HadPetOptions,
  HavePetOptions,
  HouseTypeOptions,
  ReasonsOptions,
  TimeAloneOptions,
} from '../entities/survey-field.entity';

export class CreateSurveyFieldDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  dniNumber: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  familyComposition: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  adultsQty: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  childrenQty: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  babiesQty: number;

  @ApiProperty()
  @IsEnum(HouseTypeOptions)
  @IsNotEmpty()
  houseType: HouseTypeOptions;

  @ApiProperty()
  @IsEnum(TimeAloneOptions)
  @IsNotEmpty()
  timeAlone: TimeAloneOptions;

  @ApiProperty()
  @IsEnum(AnyKidsOptions)
  @IsNotEmpty()
  anyKids: AnyKidsOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  childrenAges?: string;

  @ApiProperty()
  @IsEnum(ReasonsOptions)
  @IsNotEmpty()
  reasons: ReasonsOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  reasonsOther?: string;

  @ApiProperty()
  @IsEnum(HadPetOptions)
  @IsNotEmpty()
  hadPet: HadPetOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  hadPetOther?: string;

  @ApiProperty()
  @IsEnum(HavePetOptions)
  @IsNotEmpty()
  havePet: HavePetOptions;

  @ApiProperty()
  @IsString()
  @IsOptional()
  havePetOther?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  getFundapetInfo: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adoptReason: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ref1Name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ref1Cellphone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ref2Name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  ref2Cellphone: string;
}
