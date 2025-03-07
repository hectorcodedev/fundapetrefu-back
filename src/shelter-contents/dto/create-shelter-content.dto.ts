import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateShelterContentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  infoTitle: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  infoImgLink: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  infoContent: string;
}
