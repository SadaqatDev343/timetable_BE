import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from './schema';
import { CreateTeacherDto, UpdateTeacherDto } from './dto';
import { createUserDto } from './../user/user.dto';

import { UserService } from 'src/user/user.service';
import { UserRole } from 'src/teacher/custom_types';
@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private readonly teacherModel: Model<Teacher>,
    private readonly userService: UserService,
  ) {}

  async createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    const { email, name, phoneNumber, password } = createTeacherDto;

    // Create User DTO
    const createUserDto: createUserDto = {
      name,
      email,
      password, // Include the password
      contact: phoneNumber,
      role: UserRole.Teacher,
    };

    try {
      // Encrypt the password using UserService
      const encryptedPassword = await this.userService.encryptPassword(
        createUserDto.password,
      );
      createUserDto.password = encryptedPassword;

      // Create the User
      const { user: createdUser } =
        await this.userService.createUser(createUserDto);

      // Create the Teacher
      const teacher = new this.teacherModel({
        ...createTeacherDto,
        userId: createdUser._id, // Optionally, store the user ID in the teacher record if needed
      });

      await teacher.save();

      return teacher;
    } catch (error) {
      if (error.code === 11000) {
        // Duplicate key error (e.g., email)
        throw new ConflictException('Email already exists');
      }
      throw new InternalServerErrorException('Failed to create teacher');
    }
  }

  async findAll(): Promise<Teacher[]> {
    return this.teacherModel.find().exec();
  }

  async findOne(id: string): Promise<Teacher> {
    const teacher = await this.teacherModel.findById(id).exec();
    if (!teacher) {
      throw new NotFoundException('Teacher not found');
    }
    return teacher;
  }

  async update(
    id: string,
    updateTeacherDto: UpdateTeacherDto,
  ): Promise<Teacher> {
    const updatedTeacher = await this.teacherModel
      .findByIdAndUpdate(id, updateTeacherDto, { new: true })
      .exec();
    if (!updatedTeacher) {
      throw new NotFoundException('Teacher not found');
    }
    return updatedTeacher;
  }

  async delete(id: string): Promise<void> {
    const result = await this.teacherModel.findByIdAndDelete(id).exec();
    if (result === null) {
      throw new NotFoundException('Teacher not found');
    }
  }
}
