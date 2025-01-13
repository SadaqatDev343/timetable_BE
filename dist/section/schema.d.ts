import { Document } from 'mongoose';
export declare class Section extends Document {
    name: string;
    code: string;
    description?: string;
    semester: string;
    discipline: string;
    department: string;
    teacher: string;
    capacity: number;
}
export declare const SectionSchema: import("mongoose").Schema<Section, import("mongoose").Model<Section, any, any, any, Document<unknown, any, Section> & Section & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Section, Document<unknown, {}, import("mongoose").FlatRecord<Section>> & import("mongoose").FlatRecord<Section> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
