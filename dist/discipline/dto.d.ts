export declare class CreateDisciplineDto {
    name: string;
    code: string;
    teacher: string;
    description?: string;
    department: string;
}
declare const UpdateDisciplineDto_base: import("@nestjs/mapped-types/dist").MappedType<Partial<CreateDisciplineDto>>;
export declare class UpdateDisciplineDto extends UpdateDisciplineDto_base {
}
export {};
