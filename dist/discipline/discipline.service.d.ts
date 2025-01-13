import { Model } from 'mongoose';
import { CreateDisciplineDto, UpdateDisciplineDto } from './dto';
import { Discipline } from './schema';
export declare class DisciplineService {
    private disciplineModel;
    constructor(disciplineModel: Model<Discipline>);
    create(createDisciplineDto: CreateDisciplineDto): Promise<Discipline>;
    findAll(): Promise<Discipline[]>;
    findOne(id: string): Promise<Discipline>;
    findByName(name: string): Promise<Discipline>;
    findByDepartment(departmentId: string): Promise<Discipline[]>;
    update(id: string, updateDisciplineDto: UpdateDisciplineDto): Promise<Discipline>;
    remove(id: string): Promise<void>;
}
