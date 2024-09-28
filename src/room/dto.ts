import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateRoomDto {
  @IsNotEmpty() // Field is required
  @IsString()   // Field must be a string
  buildingName: string;

  @IsNotEmpty() // Field is required
  @IsString()   // Field must be a string
  floorNumber: string;

  @IsNotEmpty() // Field is required
  @IsString()   // Field must be a string
  roomNumber: string;
}

export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
