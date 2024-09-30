import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { DatesheetService } from './datesheet.service';
import { CreateDatesheetDto, UpdateDatesheetDto } from './dto';


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
