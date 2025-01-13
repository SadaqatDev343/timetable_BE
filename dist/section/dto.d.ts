export declare class CreateSectionDto {
    name: string;
    code: string;
    description?: string;
    discipline: string;
    department: string;
    semester: string;
    teacher: string;
    capacity: number;
}
declare const UpdateSectionDto_base: import("@nestjs/mapped-types/dist").MappedType<Partial<CreateSectionDto>>;
export declare class UpdateSectionDto extends UpdateSectionDto_base {
}
export {};
