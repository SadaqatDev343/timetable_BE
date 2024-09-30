import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Datesheet } from './schema';
import { CreateDatesheetDto, UpdateDatesheetDto } from './dto';

@Injectable()
export class DatesheetService {
  constructor(
    @InjectModel(Datesheet.name) private datesheetModel: Model<Datesheet>,
  ) {}

  // Create a new datesheet
  async create(createDatesheetDto: CreateDatesheetDto): Promise<Datesheet> {
    const newDatesheet = new this.datesheetModel(createDatesheetDto);
    return newDatesheet.save();
  }

  // Get all datesheets
  async findAll(): Promise<Datesheet[]> {
    return this.datesheetModel.find().populate('department discipline semester section subject room').exec();
  }

  // Get a specific datesheet by ID
  async findOne(id: string): Promise<Datesheet> {
    const datesheet = await this.datesheetModel.findById(id).populate('department discipline semester section subject room').exec();
    if (!datesheet) {
      throw new NotFoundException(`Datesheet with ID "${id}" not found`);
    }
    return datesheet;
  }

  // Update a datesheet by ID
  async update(id: string, updateDatesheetDto: UpdateDatesheetDto): Promise<Datesheet> {
    const updatedDatesheet = await this.datesheetModel
      .findByIdAndUpdate(id, updateDatesheetDto, { new: true })
      .exec();
    if (!updatedDatesheet) {
      throw new NotFoundException(`Datesheet with ID "${id}" not found`);
    }
    return updatedDatesheet;
  }

  // Delete a datesheet by ID
  async remove(id: string): Promise<void> {
    const deletedDatesheet = await this.datesheetModel.findByIdAndDelete(id).exec();
    if (!deletedDatesheet) {
      throw new NotFoundException(`Datesheet with ID "${id}" not found`);
    }
  }
}
