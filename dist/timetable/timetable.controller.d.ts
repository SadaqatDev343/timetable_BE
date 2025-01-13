import { TimetableService } from './timetable.service';
import { CreateTimeTableDto, UpdateTimeTableDto } from './dto';
import { Response } from 'express';
export declare class TimetableController {
    private readonly timetableService;
    constructor(timetableService: TimetableService);
    create(createTimeTableDto: CreateTimeTableDto): Promise<import("./schema").Timetable>;
    findAll(): Promise<import("./schema").Timetable[]>;
    findOne(id: string): Promise<import("./schema").Timetable>;
    findBySection(response: Response, sectionId: string): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateTimeTableDto: UpdateTimeTableDto): Promise<import("./schema").Timetable>;
    remove(id: string): Promise<void>;
}
