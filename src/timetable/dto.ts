import { IsNotEmpty, IsString, IsDate, IsMongoId } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTimeTableDto {
  @IsNotEmpty()
  @IsMongoId()
  department: string;  // References Department ObjectId

  @IsNotEmpty()
  @IsMongoId()
  discipline: string;  // References Discipline ObjectId

  @IsNotEmpty()
  @IsMongoId()
  semester: string;  // References Semester ObjectId

  @IsNotEmpty()
  @IsMongoId()
  section: string;  // References Section ObjectId

  @IsNotEmpty()
  @IsMongoId()
  teacher: string;  // References Teacher ObjectId

  @IsNotEmpty()
  @IsMongoId()
  subject: string;  // References Subject ObjectId

  @IsNotEmpty()
  @IsMongoId()
  room: string;  // References Room ObjectId

  @IsNotEmpty()
  @IsString()
  day: string;  // Stores the day, could also be an enum if you want

  @IsNotEmpty()
  @IsString()
  startTime: string;  // Start time of the timetable

  @IsNotEmpty()
  @IsString()
  endTime: string;  // End time of the timetable
}

export class UpdateTimeTableDto extends PartialType(CreateTimeTableDto) {}
