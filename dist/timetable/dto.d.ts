export declare class CreateTimeTableDto {
    department: string;
    discipline: string;
    semester: string;
    section: string;
    teacher: string;
    subject: string;
    room: string;
    day: string;
    startTime: string;
    endTime: string;
}
declare const UpdateTimeTableDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTimeTableDto>>;
export declare class UpdateTimeTableDto extends UpdateTimeTableDto_base {
}
export {};
