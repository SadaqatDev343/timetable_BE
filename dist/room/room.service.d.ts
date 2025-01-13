import { Model } from 'mongoose';
import { CreateRoomDto, UpdateRoomDto } from './dto';
import { Room } from './schema';
export declare class RoomService {
    private roomModel;
    constructor(roomModel: Model<Room>);
    create(createRoomDto: CreateRoomDto): Promise<Room>;
    findAll(): Promise<Room[]>;
    findOne(id: string): Promise<Room>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room>;
    remove(id: string): Promise<void>;
}
