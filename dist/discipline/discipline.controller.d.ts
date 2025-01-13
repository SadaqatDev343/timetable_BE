import { Response } from 'express';
import { CreateDisciplineDto, UpdateDisciplineDto } from './dto';
import { DisciplineService } from './discipline.service';
export declare class DisciplineController {
    private readonly disciplineService;
    constructor(disciplineService: DisciplineService);
    create(response: Response, createDisciplineDto: CreateDisciplineDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    findByName(response: Response, name: string): Promise<Response<any, Record<string, any>>>;
    findByDepartment(response: Response, departmentId: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateDisciplineDto: UpdateDisciplineDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
