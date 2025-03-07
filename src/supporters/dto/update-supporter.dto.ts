import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { DniTypeOptions, SupportOptions } from '../entities/supporter.entity';

export class UpdateSupporterDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

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
  @IsString()
  @IsOptional()
  cellphone?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsEnum(SupportOptions)
  @IsOptional()
  supportAlternatives?: SupportOptions;
}
