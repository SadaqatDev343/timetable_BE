import { Controller, Get, Post, Body, Param, Patch, Delete, HttpStatus, Res } from '@nestjs/common';
import { DatesheetService } from './datesheet.service';
import { CreateDatesheetDto, UpdateDatesheetDto } from './dto';
import { Response } from 'express';

@Controller('datesheet')
export class DatesheetController {
  constructor(private readonly datesheetService: DatesheetService) {}

  // Create a new datesheet
  @Post()
  create(@Body() createDatesheetDto: CreateDatesheetDto) {
    return this.datesheetService.create(createDatesheetDto);
  }

  // Get all datesheets
  @Get()
  findAll() {
    return this.datesheetService.findAll();
  }

  // Get a specific datesheet by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.datesheetService.findOne(id);
  }
  @Get('by-section/:sectionId')
  async findBySection(@Res() response: Response, @Param('sectionId') sectionId: string) {
    try {
      const timetables = await this.datesheetService.findBySection(sectionId);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'datesheet retrieved successfully',
        data: timetables,
      });
    } catch (error) {
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'datesheet not found',
        error: error.message,
      });
    }
  }

  // Update a datesheet by ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDatesheetDto: UpdateDatesheetDto) {
    return this.datesheetService.update(id, updateDatesheetDto);
  }

  // Delete a datesheet by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.datesheetService.remove(id);
  }
}
