import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import {
  DniTypeOptions,
  MaritalStatusOptions,
  StratumOptions,
  LocalityOptions,
} from '../entities/candidate.entity';

export class CreateCandidateDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsEnum(DniTypeOptions)
  @IsNotEmpty()
  dniType: DniTypeOptions;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  dniNumber: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  age: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @ApiProperty()
  @IsEnum(LocalityOptions)
  @IsString()
  @IsNotEmpty()
  locality: LocalityOptions;

  @ApiProperty()
  @IsEnum(StratumOptions)
  @IsNotEmpty()
  stratum: StratumOptions;

  @ApiProperty()
  @IsEnum(MaritalStatusOptions)
  @IsNotEmpty()
  maritalStatus: MaritalStatusOptions;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  children: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  profession: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyAddress: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  companyPhone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  facebookUser?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  instagramUser?: string;
}
