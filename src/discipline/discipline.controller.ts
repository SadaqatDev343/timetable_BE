import { Body, Controller, Get, Param, Post, Patch, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateDisciplineDto, UpdateDisciplineDto } from './dto';
import { DisciplineService } from './discipline.service';

@Controller('disciplines')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Post()
  async create(@Res() response: Response, @Body() createDisciplineDto: CreateDisciplineDto) {
    try {
      const discipline = await this.disciplineService.create(createDisciplineDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        message: 'Discipline created successfully',
        data: discipline,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to create discipline',
        error: error.message,
      });
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const disciplines = await this.disciplineService.findAll();
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Disciplines retrieved successfully',
        data: disciplines,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve disciplines',
        error: error.message,
      });
    }
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    try {
      const discipline = await this.disciplineService.findOne(id);
      if (!discipline) {
        return response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Discipline not found',
        });
      }
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Discipline retrieved successfully',
        data: discipline,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve discipline',
        error: error.message,
      });
    }
  }

  @Patch(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateDisciplineDto: UpdateDisciplineDto
  ) {
    try {
      const discipline = await this.disciplineService.update(id, updateDisciplineDto);
      if (!discipline) {
        return response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Discipline not found',
        });
      }
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Discipline updated successfully',
        data: discipline,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to update discipline',
        error: error.message,
      });
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      await this.disciplineService.remove(id);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Discipline deleted successfully',
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to delete discipline',
        error: error.message,
      });
    }
  }
}
