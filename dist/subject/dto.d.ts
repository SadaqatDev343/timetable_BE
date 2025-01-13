export declare class CreateSubjectDto {
    courseCode: string;
    name: string;
    credits: number;
}
declare const UpdateSubjectDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSubjectDto>>;
export declare class UpdateSubjectDto extends UpdateSubjectDto_base {
}
export {};
