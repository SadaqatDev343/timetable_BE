export declare class CreateDepartmentDto {
    name: string;
    headOfDepartment: string;
    description?: string;
    email?: string;
    phoneNumber?: string;
}
declare const UpdateDepartmentDto_base: import("@nestjs/mapped-types/dist").MappedType<Partial<CreateDepartmentDto>>;
export declare class UpdateDepartmentDto extends UpdateDepartmentDto_base {
}
export {};
