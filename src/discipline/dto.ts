import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types/dist';
export class CreateDisciplineDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;

  @IsNotEmpty()
  @IsString()
  teacher: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  department: string; // This should be an ObjectId reference to Department
}


export class UpdateDisciplineDto   extends PartialType(CreateDisciplineDto) {}