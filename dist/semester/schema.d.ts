import { Document } from 'mongoose';
import { Department } from 'src/department/schema';
import { Discipline } from 'src/discipline/schema';
export declare class Semester extends Document {
    name: string;
    code: string;
    description: string;
    discipline: Discipline;
    department: Department;
}
export declare const SemesterSchema: import("mongoose").Schema<Semester, import("mongoose").Model<Semester, any, any, any, Document<unknown, any, Semester> & Semester & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Semester, Document<unknown, {}, import("mongoose").FlatRecord<Semester>> & import("mongoose").FlatRecord<Semester> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
