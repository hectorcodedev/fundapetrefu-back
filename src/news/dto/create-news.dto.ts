import { IsNotEmpty, IsString } from 'class-validator';

export class CreateNewsDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  newsTitle: string;

  @IsString()
  @IsNotEmpty()
  newsContent: string;

  @IsString()
  @IsNotEmpty()
  newsImg: string;
}
