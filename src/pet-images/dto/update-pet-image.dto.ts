import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePetImageDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  petImageName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  petImageLink?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  petImageDescription?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  petName?: string;
}
