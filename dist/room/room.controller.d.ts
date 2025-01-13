import { RoomService } from './room.service';
import { CreateRoomDto, UpdateRoomDto } from './dto';
import { Response } from 'express';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    create(response: Response, createRoomDto: CreateRoomDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateRoomDto: UpdateRoomDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
