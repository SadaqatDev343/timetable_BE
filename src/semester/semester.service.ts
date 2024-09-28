import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSemesterDto, UpdateSemesterDto } from './dto';
import { Semester } from './schema';

@Injectable()
export class SemesterService {
  constructor(@InjectModel(Semester.name) private readonly semesterModel: Model<Semester>) {}

  async create(createSemesterDto: CreateSemesterDto): Promise<Semester> {
    const newSemester = new this.semesterModel(createSemesterDto);
    return newSemester.save();
  }

  async findAll(): Promise<Semester[]> {
    return this.semesterModel.find().populate('discipline').populate('department').exec();
  }

  async findOne(id: string): Promise<Semester> {
    const semester = await this.semesterModel.findById(id).populate('discipline').populate('department').exec();
    if (!semester) {
      throw new NotFoundException(`Semester with ID ${id} not found`);
    }
    return semester;
  }

  async findByName(name: string): Promise<Semester> {
    const semester = await this.semesterModel
      .findOne({ name }) // Find by name
      .populate('discipline') // Populate discipline
      .populate('department') // Populate department
      .exec();
    if (!semester) {
      throw new NotFoundException(`Semester with name "${name}" not found`);
    }
    return semester;
  }

  async findByDiscipline(disciplineId: string): Promise<Semester> {
    const semester = await this.semesterModel
      .findOne({ discipline: disciplineId }) // Find by discipline ID
      .populate('discipline') // Populate discipline
      .populate('department') // Populate department
      .exec();
    
    if (!semester) {
      throw new NotFoundException(`Semester with discipline ID "${disciplineId}" not found`);
    }
    
    return semester;
  }
  
  
  async update(id: string, updateSemesterDto: UpdateSemesterDto): Promise<Semester> {
    const updatedSemester = await this.semesterModel
      .findByIdAndUpdate(id, updateSemesterDto, { new: true })
      .populate('discipline')
      .populate('department')
      .exec();
    if (!updatedSemester) {
      throw new NotFoundException(`Semester with ID ${id} not found`);
    }
    return updatedSemester;
  }

  async remove(id: string): Promise<void> {
    const result = await this.semesterModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Semester with ID ${id} not found`);
    }
  }
}
