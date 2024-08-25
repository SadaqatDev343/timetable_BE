import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types/dist';
export class CreateTeacherDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  subjectTaught: string;

  @IsNotEmpty()
  @IsString()
  designation: string;
  @IsOptional()
  @IsString()
  password: string;
}


export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {}