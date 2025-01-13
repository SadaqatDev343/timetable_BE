export declare class CreateDatesheetDto {
    department: string;
    discipline: string;
    semester: string;
    section: string;
    subject: string;
    room: string;
    examDate: Date;
    startTime: string;
    endTime: string;
    examType: string;
}
declare const UpdateDatesheetDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateDatesheetDto>>;
export declare class UpdateDatesheetDto extends UpdateDatesheetDto_base {
}
export {};
