import { Model } from 'mongoose';
import { Datesheet } from './schema';
import { CreateDatesheetDto, UpdateDatesheetDto } from './dto';
export declare class DatesheetService {
    private datesheetModel;
    constructor(datesheetModel: Model<Datesheet>);
    create(createDatesheetDto: CreateDatesheetDto): Promise<Datesheet>;
    findAll(): Promise<Datesheet[]>;
    findOne(id: string): Promise<Datesheet>;
    findBySection(sectionId: string): Promise<Datesheet[]>;
    update(id: string, updateDatesheetDto: UpdateDatesheetDto): Promise<Datesheet>;
    remove(id: string): Promise<void>;
}
