import { SubjectService } from './subject.service';
import { CreateSubjectDto, UpdateSubjectDto } from './dto';
import { Response } from 'express';
export declare class SubjectController {
    private readonly subjectService;
    constructor(subjectService: SubjectService);
    create(response: Response, createSubjectDto: CreateSubjectDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateSubjectDto: UpdateSubjectDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
