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
  import { TeacherService } from './teacher.service';
  import { CreateTeacherDto, UpdateTeacherDto } from './dto';
  import { Response } from 'express';
  
  @Controller('teachers')
  export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}
  
    @Post()
    async create(@Res() response: Response, @Body() createTeacherDto: CreateTeacherDto) {
      try {
        const teacher = await this.teacherService.createTeacher(createTeacherDto);
        return response.status(HttpStatus.CREATED).json({
          statusCode: HttpStatus.CREATED,
          message: 'Teacher created successfully',
          data: teacher,
        });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Failed to create teacher',
          error: error.message,
        });
      }
    }
  
    @Get()
    async findAll(@Res() response: Response) {
      try {
        const teachers = await this.teacherService.findAll();
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'Teachers retrieved successfully',
          data: teachers,
        });
      } catch (error) {
        return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Failed to retrieve teachers',
          error: error.message,
        });
      }
    }
  
    @Get(':id')
    async findOne(@Res() response: Response, @Param('id') id: string) {
      try {
        const teacher = await this.teacherService.findOne(id);
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'Teacher retrieved successfully',
          data: teacher,
        });
      } catch (error) {
        return response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Teacher not found',
          error: error.message,
        });
      }
    }
  
    @Patch(':id')
    async update(
      @Res() response: Response,
      @Param('id') id: string,
      @Body() updateTeacherDto: UpdateTeacherDto,
    ) {
      try {
        const updatedTeacher = await this.teacherService.update(id, updateTeacherDto);
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'Teacher updated successfully',
          data: updatedTeacher,
        });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Failed to update teacher',
          error: error.message,
        });
      }
    }
  
    @Delete(':id')
    async delete(@Res() response: Response, @Param('id') id: string) {
      try {
        await this.teacherService.delete(id);
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'Teacher deleted successfully',
        });
      } catch (error) {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Failed to delete teacher',
          error: error.message,
        });
      }
    }
  }
  