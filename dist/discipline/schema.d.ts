import { Document } from 'mongoose';
export declare class Discipline extends Document {
    name: string;
    code: string;
    description?: string;
    teacher: string;
    department: string;
}
export declare const DisciplineSchema: import("mongoose").Schema<Discipline, import("mongoose").Model<Discipline, any, any, any, Document<unknown, any, Discipline> & Discipline & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Discipline, Document<unknown, {}, import("mongoose").FlatRecord<Discipline>> & import("mongoose").FlatRecord<Discipline> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
