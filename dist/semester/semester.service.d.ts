import { Model } from 'mongoose';
import { CreateSemesterDto, UpdateSemesterDto } from './dto';
import { Semester } from './schema';
export declare class SemesterService {
    private readonly semesterModel;
    constructor(semesterModel: Model<Semester>);
    create(createSemesterDto: CreateSemesterDto): Promise<Semester>;
    findAll(): Promise<Semester[]>;
    findOne(id: string): Promise<Semester>;
    findByName(name: string): Promise<Semester[]>;
    findByDiscipline(disciplineId: string): Promise<Semester[]>;
    update(id: string, updateSemesterDto: UpdateSemesterDto): Promise<Semester>;
    remove(id: string): Promise<void>;
}
