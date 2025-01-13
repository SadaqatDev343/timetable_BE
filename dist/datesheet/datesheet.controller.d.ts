import { DatesheetService } from './datesheet.service';
import { CreateDatesheetDto, UpdateDatesheetDto } from './dto';
import { Response } from 'express';
export declare class DatesheetController {
    private readonly datesheetService;
    constructor(datesheetService: DatesheetService);
    create(createDatesheetDto: CreateDatesheetDto): Promise<import("./schema").Datesheet>;
    findAll(): Promise<import("./schema").Datesheet[]>;
    findOne(id: string): Promise<import("./schema").Datesheet>;
    findBySection(response: Response, sectionId: string): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateDatesheetDto: UpdateDatesheetDto): Promise<import("./schema").Datesheet>;
    remove(id: string): Promise<void>;
}
