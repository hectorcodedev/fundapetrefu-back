import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateShelterContentDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  infoTitle?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  infoImgLink?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  infoContent?: string;
}
