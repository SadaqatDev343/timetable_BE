import { IsNotEmpty, isNumber, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateSubjectDto {
  @IsNotEmpty() // Field is required
  @IsString()   // Field must be a string
  courseCode: string;

  @IsNotEmpty() // Field is required
  @IsString()   // Field must be a string
  name: string;

  @IsNotEmpty() // Field is required  // Field must be a string
  credits: number;
}

export class UpdateSubjectDto extends PartialType(CreateSubjectDto) {}
