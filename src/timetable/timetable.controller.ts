import { Controller, Get, Post, Body, Param, Patch, Delete, Res, HttpStatus } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { CreateTimeTableDto, UpdateTimeTableDto } from './dto';
import { Response } from 'express';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  // Create a new timetable
  @Post()
  create(@Body() createTimeTableDto: CreateTimeTableDto) {
    return this.timetableService.create(createTimeTableDto);
  }

  // Get all timetables
  @Get()
  findAll() {
    return this.timetableService.findAll();
  }

  // Get a specific timetable by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timetableService.findOne(id);
  }
  @Get('by-section/:sectionId')
  async findBySection(@Res() response: Response, @Param('sectionId') sectionId: string) {
    try {
      const timetables = await this.timetableService.findBySection(sectionId);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Timetable retrieved successfully',
        data: timetables,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Timetable not found',
        error: error.message,
      });
    }
  }

  // Update a timetable by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTimeTableDto: UpdateTimeTableDto) {
    return this.timetableService.update(id, updateTimeTableDto);
  }

  // Delete a timetable by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.timetableService.remove(id);
  }
}
