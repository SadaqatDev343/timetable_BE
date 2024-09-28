import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDisciplineDto, UpdateDisciplineDto } from './dto';
import { Discipline } from './schema';

@Injectable()
export class DisciplineService {
  constructor(@InjectModel(Discipline.name) private disciplineModel: Model<Discipline>) {}

  async create(createDisciplineDto: CreateDisciplineDto): Promise<Discipline> {
    const newDiscipline = new this.disciplineModel(createDisciplineDto);
    return await newDiscipline.save();
  }

  async findAll(): Promise<Discipline[]> {
    return await this.disciplineModel.find().exec();
  }

  async findOne(id: string): Promise<Discipline> {
    const discipline = await this.disciplineModel.findById(id).exec();
    if (!discipline) {
      throw new NotFoundException(`Discipline with ID ${id} not found`);
    }
    return discipline;
  }
  async findByName(name: string): Promise<Discipline> {
    const discipline = await this.disciplineModel
      .findOne({ name })
      .populate('department') // Populate the department data
      .exec();
    
    if (!discipline) {
      throw new NotFoundException(`Discipline with name ${name} not found`);
    }
    return discipline;
  }

  async update(id: string, updateDisciplineDto: UpdateDisciplineDto): Promise<Discipline> {
    const discipline = await this.disciplineModel.findByIdAndUpdate(id, updateDisciplineDto, { new: true }).exec();
    if (!discipline) {
      throw new NotFoundException(`Discipline with ID ${id} not found`);
    }
    return discipline;
  }

  async remove(id: string): Promise<void> {
    const result = await this.disciplineModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Discipline with ID ${id} not found`);
    }
  }
}
