import { Model } from 'mongoose';
import { Department } from './schema';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto';
export declare class DepartmentService {
    private departmentModel;
    constructor(departmentModel: Model<Department>);
    createDepartment(createDepartmentDto: CreateDepartmentDto): Promise<Department>;
    updateDepartment(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<Department>;
    getDepartmentById(id: string): Promise<Department>;
    getAllDepartments(): Promise<Department[]>;
    deleteDepartment(id: string): Promise<void>;
    getDepartmentByName(name: string): Promise<Department>;
}
