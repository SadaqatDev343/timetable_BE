import { Types } from 'mongoose';
export declare class CreateSemesterDto {
    name: string;
    3: any;
    code: string;
    description?: string;
    discipline: Types.ObjectId;
    department: Types.ObjectId;
}
declare const UpdateSemesterDto_base: import("@nestjs/mapped-types/dist").MappedType<Partial<CreateSemesterDto>>;
export declare class UpdateSemesterDto extends UpdateSemesterDto_base {
}
export {};
