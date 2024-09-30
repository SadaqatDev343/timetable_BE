import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsMongoId, IsDate } from 'class-validator';

export class CreateDatesheetDto {
  @IsNotEmpty()
  @IsMongoId()
  department: string;

  @IsNotEmpty()
  @IsMongoId()
  discipline: string;

  @IsNotEmpty()
  @IsMongoId()
  semester: string;

  @IsNotEmpty()
  @IsMongoId()
  section: string;

  @IsNotEmpty()
  @IsMongoId()
  subject: string;

  @IsNotEmpty()
  @IsMongoId()
  room: string;

  @IsNotEmpty()
  @IsDate()
  examDate: Date;

  @IsNotEmpty()
  @IsString()
  startTime: string;

  @IsNotEmpty()
  @IsString()
  endTime: string;

  @IsNotEmpty()
  @IsString()
  examType: string; // Example: 'Midterm', 'Final'
}

export class UpdateDatesheetDto extends PartialType(CreateDatesheetDto) {}
