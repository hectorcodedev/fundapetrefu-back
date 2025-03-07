import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSupportDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  supportTitle: string;

  @IsString()
  @IsNotEmpty()
  supportContent: string;

  @IsString()
  @IsNotEmpty()
  supportImg: string;

  @IsString()
  @IsNotEmpty()
  supportLink: string;
}
