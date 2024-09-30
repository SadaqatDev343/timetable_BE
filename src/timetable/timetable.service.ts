import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timetable } from './schema';
import { CreateTimeTableDto, UpdateTimeTableDto } from './dto';


@Injectable()
export class TimetableService {
  constructor(
    @InjectModel(Timetable.name) private timetableModel: Model<Timetable>,
  ) {}

  // Create a new timetable
  async create(createTimeTableDto: CreateTimeTableDto): Promise<Timetable> {
    const newTimetable = new this.timetableModel(createTimeTableDto);
    return newTimetable.save();
  }

  // Get all timetables
  async findAll(): Promise<Timetable[]> {
    return this.timetableModel.find().populate('department discipline semester section teacher subject room').exec();
  }

  // Get a specific timetable by ID
  async findOne(id: string): Promise<Timetable> {
    const timetable = await this.timetableModel.findById(id).populate('department discipline semester section teacher subject room').exec();
    if (!timetable) {
      throw new NotFoundException(`Timetable with ID "${id}" not found`);
    }
    return timetable;
  }

  // Update a timetable by ID
  async update(id: string, updateTimeTableDto: UpdateTimeTableDto): Promise<Timetable> {
    const updatedTimetable = await this.timetableModel
      .findByIdAndUpdate(id, updateTimeTableDto, { new: true })
      .exec();
    if (!updatedTimetable) {
      throw new NotFoundException(`Timetable with ID "${id}" not found`);
    }
    return updatedTimetable;
  }

  // Delete a timetable by ID
  async remove(id: string): Promise<void> {
    const deletedTimetable = await this.timetableModel.findByIdAndDelete(id).exec();
    if (!deletedTimetable) {
      throw new NotFoundException(`Timetable with ID "${id}" not found`);
    }
  }
}
