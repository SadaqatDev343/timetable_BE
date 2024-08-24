import { PartialType } from '@nestjs/mapped-types/dist';
import { createUserDto } from './user.dto';

export class UpdateUserDto extends PartialType(createUserDto) {}
