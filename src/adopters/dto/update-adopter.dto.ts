import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAdopterDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  adopterDniNumber?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  adopterFirstName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  adopterLastName?: string;
}
