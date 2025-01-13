import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';
import { DepartmentService } from './department.service';
import { Department } from './schema';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: string): Promise<Department>;
    remove(id: string): Promise<void>;
    findByName(name: string): Promise<Department>;
}
