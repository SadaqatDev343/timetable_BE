import { IsNotEmpty, IsEmail, IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types/dist';
export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  headOfDepartment: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;
}


export class UpdateDepartmentDto  extends PartialType(CreateDepartmentDto) {}