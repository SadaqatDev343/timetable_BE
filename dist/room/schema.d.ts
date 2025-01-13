import { Document } from 'mongoose';
export declare class Room extends Document {
    buildingName: string;
    floorNumber: number;
    roomNumber: string;
}
export declare const RoomSchema: import("mongoose").Schema<Room, import("mongoose").Model<Room, any, any, any, Document<unknown, any, Room> & Room & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Room, Document<unknown, {}, import("mongoose").FlatRecord<Room>> & import("mongoose").FlatRecord<Room> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
