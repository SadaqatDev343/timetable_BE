import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { CreateTimeTableDto } from './dto';
import { Response } from 'express';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timeTableService: TimetableService) {}
  
    @Post()
    async create(@Res() response: Response, @Body() createTimeTableDto: CreateTimeTableDto) {
      try {
        const timeTable = await this.timeTableService.createTimeTable();
        return response.status(HttpStatus.CREATED).json({
          statusCode: HttpStatus.CREATED,
          message: 'Teacher created successfully',
          data: timeTable,
        });
        
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Failed to create teacher',
          error: error.message,
        });
      }
    }
}
