import { IsNotEmpty, IsString, IsOptional, IsInt, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types/dist';
export class CreateSectionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  discipline: string; // ObjectId reference to Discipline

  @IsNotEmpty()
  @IsString()
  department: string; // ObjectId reference to Department
  @IsNotEmpty()
  @IsString()
  semester: string;

  @IsNotEmpty()
  @IsString()
  teacher: string; // ObjectId reference to Teacher

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  capacity: number;
}


export class UpdateSectionDto    extends PartialType(CreateSectionDto) {}