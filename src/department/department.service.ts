import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './schema';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';

@Injectable()
export class DepartmentService {
  constructor(@InjectModel(Department.name) private departmentModel: Model<Department>) {}

  async createDepartment(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    const newDepartment = new this.departmentModel(createDepartmentDto);
    return await newDepartment.save();
  }

  async updateDepartment(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
    const updatedDepartment = await this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, { new: true }).exec();
    if (!updatedDepartment) {
      throw new NotFoundException('Department not found');
    }
    return updatedDepartment;
  }

  async getDepartmentById(id: string): Promise<Department> {
    const department = await this.departmentModel.findById(id).exec();
    if (!department) {
      throw new NotFoundException('Department not found');
    }
    return department;
  }

  async getAllDepartments(): Promise<Department[]> {
    return await this.departmentModel.find().exec();
  }

  async deleteDepartment(id: string): Promise<void> {
    const result = await this.departmentModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException('Department not found');
    }
  }
}
