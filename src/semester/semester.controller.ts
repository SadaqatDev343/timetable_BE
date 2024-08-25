import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SemesterService } from './semester.service';
import { CreateSemesterDto, UpdateSemesterDto } from './dto';

@Controller('semesters')
export class SemesterController {
  constructor(private readonly semesterService: SemesterService) {}

  @Post()
  async create(@Body() createSemesterDto: CreateSemesterDto) {
    return this.semesterService.create(createSemesterDto);
  }

  @Get()
  async findAll() {
    return this.semesterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.semesterService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSemesterDto: UpdateSemesterDto) {
    return this.semesterService.update(id, updateSemesterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.semesterService.remove(id);
  }
}
