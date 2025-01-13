import { Document, Types } from 'mongoose';
export declare class Timetable extends Document {
    department: Types.ObjectId;
    discipline: Types.ObjectId;
    semester: Types.ObjectId;
    section: Types.ObjectId;
    teacher: Types.ObjectId;
    subject: Types.ObjectId;
    room: Types.ObjectId;
    day: string;
    startTime: string;
    endTime: string;
}
export declare const TimetableSchema: import("mongoose").Schema<Timetable, import("mongoose").Model<Timetable, any, any, any, Document<unknown, any, Timetable> & Timetable & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Timetable, Document<unknown, {}, import("mongoose").FlatRecord<Timetable>> & import("mongoose").FlatRecord<Timetable> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
