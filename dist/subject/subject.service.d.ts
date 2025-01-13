import { Model } from 'mongoose';
import { CreateSubjectDto, UpdateSubjectDto } from './dto';
import { Subject } from './schema';
export declare class SubjectService {
    private subjectModel;
    constructor(subjectModel: Model<Subject>);
    create(createSubjectDto: CreateSubjectDto): Promise<Subject>;
    findAll(): Promise<Subject[]>;
    findOne(id: string): Promise<Subject>;
    update(id: string, updateSubjectDto: UpdateSubjectDto): Promise<Subject>;
    remove(id: string): Promise<void>;
}
