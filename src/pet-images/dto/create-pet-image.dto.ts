import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePetImageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  petImageName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  petImageLink: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  petImageDescription: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  petName?: string;
}
