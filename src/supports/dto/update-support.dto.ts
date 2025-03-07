import { IsOptional, IsString } from 'class-validator';

export class UpdateSupportDto {
  @IsString()
  @IsOptional()
  id?: string;

  @IsString()
  @IsOptional()
  supportTitle?: string;

  @IsString()
  @IsOptional()
  supportContent?: string;

  @IsString()
  @IsOptional()
  supportImg?: string;

  @IsString()
  @IsOptional()
  supportLink?: string;
}
