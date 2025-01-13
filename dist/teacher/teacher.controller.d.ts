import { TeacherService } from './teacher.service';
import { CreateTeacherDto, UpdateTeacherDto } from './dto';
import { Response } from 'express';
export declare class TeacherController {
    private readonly teacherService;
    constructor(teacherService: TeacherService);
    create(response: Response, createTeacherDto: CreateTeacherDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateTeacherDto: UpdateTeacherDto): Promise<Response<any, Record<string, any>>>;
    delete(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
