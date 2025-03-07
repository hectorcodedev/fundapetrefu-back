import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import {
  DniTypeOptions,
  MaritalStatusOptions,
  StratumOptions,
  LocalityOptions,
} from '../entities/candidate.entity';

export class UpdateCandidateDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty()
  @IsEnum(DniTypeOptions)
  @IsOptional()
  dniType?: DniTypeOptions;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  dniNumber?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  neighborhood?: string;

  @ApiProperty()
  @IsEnum(LocalityOptions)
  @IsOptional()
  locality?: LocalityOptions;

  @ApiProperty()
  @IsEnum(StratumOptions)
  @IsOptional()
  stratum?: StratumOptions;

  @ApiProperty()
  @IsEnum(MaritalStatusOptions)
  @IsOptional()
  maritalStatus?: MaritalStatusOptions;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  children?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  cellphone?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  profession?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  companyName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  companyAddress?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  companyPhone?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  facebookUser?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  instagramUser?: string;
}
