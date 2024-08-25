import { Body, Controller, Get, Param, Post, Patch, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateSectionDto, UpdateSectionDto } from './dto';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  async create(@Res() response: Response, @Body() createSectionDto: CreateSectionDto) {
    try {
      const section = await this.sectionService.create(createSectionDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        message: 'Section created successfully',
        data: section,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to create section',
        error: error.message,
      });
    }
  }

  @Get()
  async findAll(@Res() response: Response) {
    try {
      const sections = await this.sectionService.findAll();
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Sections retrieved successfully',
        data: sections,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve sections',
        error: error.message,
      });
    }
  }

  @Get(':id')
  async findOne(@Res() response: Response, @Param('id') id: string) {
    try {
      const section = await this.sectionService.findOne(id);
      if (!section) {
        return response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Section not found',
        });
      }
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Section retrieved successfully',
        data: section,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve section',
        error: error.message,
      });
    }
  }

  @Patch(':id')
  async update(
    @Res() response: Response,
    @Param('id') id: string,
    @Body() updateSectionDto: UpdateSectionDto
  ) {
    try {
      const section = await this.sectionService.update(id, updateSectionDto);
      if (!section) {
        return response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: 'Section not found',
        });
      }
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Section updated successfully',
        data: section,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to update section',
        error: error.message,
      });
    }
  }

  @Delete(':id')
  async remove(@Res() response: Response, @Param('id') id: string) {
    try {
      await this.sectionService.remove(id);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Section deleted successfully',
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to delete section',
        error: error.message,
      });
    }
  }
}
