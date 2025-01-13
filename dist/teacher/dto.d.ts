export declare class CreateTeacherDto {
    name: string;
    email: string;
    phoneNumber: string;
    subjectTaught: string;
    designation: string;
    password: string;
}
declare const UpdateTeacherDto_base: import("@nestjs/mapped-types/dist").MappedType<Partial<CreateTeacherDto>>;
export declare class UpdateTeacherDto extends UpdateTeacherDto_base {
}
export {};
