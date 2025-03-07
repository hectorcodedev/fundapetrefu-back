import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DniTypeOptions, SupportOptions } from '../entities/supporter.entity';

export class CreateSupporterDto {
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
  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsEnum(SupportOptions)
  @IsNotEmpty()
  supportAlternatives: SupportOptions;
}
