import { SemesterService } from './semester.service';
import { CreateSemesterDto, UpdateSemesterDto } from './dto';
export declare class SemesterController {
    private readonly semesterService;
    constructor(semesterService: SemesterService);
    create(createSemesterDto: CreateSemesterDto): Promise<import("./schema").Semester>;
    findAll(): Promise<import("./schema").Semester[]>;
    findOne(id: string): Promise<import("./schema").Semester>;
    findByName(name: string): Promise<import("./schema").Semester[]>;
    findByDiscipline(disciplineId: string): Promise<import("./schema").Semester[]>;
    update(id: string, updateSemesterDto: UpdateSemesterDto): Promise<import("./schema").Semester>;
    remove(id: string): Promise<void>;
}
