import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateStoryDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  storyTitle?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  storyContent?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  storyImg?: string;
}
