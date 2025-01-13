import { Response } from 'express';
import { CreateSectionDto, UpdateSectionDto } from './dto';
import { SectionService } from './section.service';
export declare class SectionController {
    private readonly sectionService;
    constructor(sectionService: SectionService);
    create(response: Response, createSectionDto: CreateSectionDto): Promise<Response<any, Record<string, any>>>;
    findAll(response: Response): Promise<Response<any, Record<string, any>>>;
    findOne(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
    findByName(response: Response, name: string): Promise<Response<any, Record<string, any>>>;
    findBySemester(response: Response, semesterId: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, id: string, updateSectionDto: UpdateSectionDto): Promise<Response<any, Record<string, any>>>;
    remove(response: Response, id: string): Promise<Response<any, Record<string, any>>>;
}
