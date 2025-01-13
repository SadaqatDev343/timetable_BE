import { Model } from 'mongoose';
import { Timetable } from './schema';
import { CreateTimeTableDto, UpdateTimeTableDto } from './dto';
export declare class TimetableService {
    private timetableModel;
    constructor(timetableModel: Model<Timetable>);
    create(createTimeTableDto: CreateTimeTableDto): Promise<Timetable>;
    findAll(): Promise<Timetable[]>;
    findOne(id: string): Promise<Timetable>;
    update(id: string, updateTimeTableDto: UpdateTimeTableDto): Promise<Timetable>;
    findBySection(sectionId: string): Promise<Timetable[]>;
    remove(id: string): Promise<void>;
}
