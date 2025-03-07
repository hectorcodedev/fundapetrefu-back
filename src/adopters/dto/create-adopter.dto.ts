import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAdopterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  adopterDniNumber: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adopterFirstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  adopterLastName: string;
}
