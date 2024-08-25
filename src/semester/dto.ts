import { IsNotEmpty, IsString, IsOptional, IsInt, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types/dist';
import { Types } from 'mongoose';
export class CreateSemesterDto {

  @IsNotEmpty()
  @IsString()
  name: string;3
  
  @IsNotEmpty()
  @IsString()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  discipline: Types.ObjectId;

  @IsNotEmpty()
  department: Types.ObjectId;
}


export class UpdateSemesterDto extends PartialType(CreateSemesterDto) {}