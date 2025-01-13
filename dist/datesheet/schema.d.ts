import { Document, Types } from 'mongoose';
export declare class Datesheet extends Document {
    department: Types.ObjectId;
    discipline: Types.ObjectId;
    semester: Types.ObjectId;
    section: Types.ObjectId;
    subject: Types.ObjectId;
    room: Types.ObjectId;
    examDate: Date;
    startTime: string;
    endTime: string;
    examType: string;
}
export declare const DatesheetSchema: import("mongoose").Schema<Datesheet, import("mongoose").Model<Datesheet, any, any, any, Document<unknown, any, Datesheet> & Datesheet & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Datesheet, Document<unknown, {}, import("mongoose").FlatRecord<Datesheet>> & import("mongoose").FlatRecord<Datesheet> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
