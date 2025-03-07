import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  storyTitle: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  storyContent: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  storyImg: string;
}
