import { Document } from 'mongoose';
export declare class Subject extends Document {
    courseCode: string;
    name: string;
    credits: number;
}
export declare const SubjectSchema: import("mongoose").Schema<Subject, import("mongoose").Model<Subject, any, any, any, Document<unknown, any, Subject> & Subject & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Subject, Document<unknown, {}, import("mongoose").FlatRecord<Subject>> & import("mongoose").FlatRecord<Subject> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
