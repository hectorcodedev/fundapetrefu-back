import { IsOptional, IsString } from 'class-validator';

export class UpdateNewsDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  newsTitle?: string;

  @IsString()
  @IsOptional()
  newsContent?: string;

  @IsString()
  @IsOptional()
  newsImg?: string;
}
