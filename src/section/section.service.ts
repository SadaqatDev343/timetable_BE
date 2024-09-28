import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSectionDto, UpdateSectionDto } from './dto';
import { Section } from './schema';

@Injectable()
export class SectionService {
  constructor(@InjectModel(Section.name) private sectionModel: Model<Section>) {}

  async create(createSectionDto: CreateSectionDto): Promise<Section> {
    const newSection = new this.sectionModel(createSectionDto);
    return await newSection.save();
  }

  async findAll(): Promise<Section[]> {
    return await this.sectionModel.find().exec();
  }

  async findOne(id: string): Promise<Section> {
    const section = await this.sectionModel.findById(id).exec();
    if (!section) {
      throw new NotFoundException(`Section with ID ${id} not found`);
    }
    return section;
  }
  async findByName(name: string): Promise<Section> {
    const section = await this.sectionModel
      .findOne({ name }) // Find section by name
      .populate('department') // Populate department
      .populate('discipline') // Populate discipline
      .populate('semester')   // Populate semester
      .populate('teacher')    // Populate teacher
      .exec();
    
    if (!section) {
      throw new NotFoundException(`Section with name "${name}" not found`);
    }
    return section;
  }

  async update(id: string, updateSectionDto: UpdateSectionDto): Promise<Section> {
    const section = await this.sectionModel.findByIdAndUpdate(id, updateSectionDto, { new: true }).exec();
    if (!section) {
      throw new NotFoundException(`Section with ID ${id} not found`);
    }
    return section;
  }

  async remove(id: string): Promise<void> {
    const result = await this.sectionModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Section with ID ${id} not found`);
    }
  }
}
