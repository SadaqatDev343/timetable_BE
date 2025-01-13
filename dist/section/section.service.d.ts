import { Model } from 'mongoose';
import { CreateSectionDto, UpdateSectionDto } from './dto';
import { Section } from './schema';
export declare class SectionService {
    private sectionModel;
    constructor(sectionModel: Model<Section>);
    create(createSectionDto: CreateSectionDto): Promise<Section>;
    findAll(): Promise<Section[]>;
    findOne(id: string): Promise<Section>;
    findByName(name: string): Promise<Section>;
    findBySemester(semesterId: string): Promise<Section[]>;
    update(id: string, updateSectionDto: UpdateSectionDto): Promise<Section>;
    remove(id: string): Promise<void>;
}
