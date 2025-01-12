import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRole } from 'src/teacher/custom_types';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsEnum(UserRole)
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsOptional()
  OTP?: string;
}
