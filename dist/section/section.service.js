"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let SectionService = class SectionService {
    constructor(sectionModel) {
        this.sectionModel = sectionModel;
    }
    async create(createSectionDto) {
        const newSection = new this.sectionModel(createSectionDto);
        return await newSection.save();
    }
    async findAll() {
        return await this.sectionModel.find().exec();
    }
    async findOne(id) {
        const section = await this.sectionModel.findById(id).exec();
        if (!section) {
            throw new common_1.NotFoundException(`Section with ID ${id} not found`);
        }
        return section;
    }
    async findByName(name) {
        const section = await this.sectionModel
            .findOne({ name })
            .populate('department')
            .populate('discipline')
            .populate('semester')
            .populate('teacher')
            .exec();
        if (!section) {
            throw new common_1.NotFoundException(`Section with name "${name}" not found`);
        }
        return section;
    }
    async findBySemester(semesterId) {
        const sections = await this.sectionModel
            .find({ semester: semesterId })
            .populate('department')
            .populate('discipline')
            .populate('teacher')
            .exec();
        if (sections.length === 0) {
            throw new common_1.NotFoundException(`No sections found for semester ID "${semesterId}"`);
        }
        return sections;
    }
    async update(id, updateSectionDto) {
        const section = await this.sectionModel.findByIdAndUpdate(id, updateSectionDto, { new: true }).exec();
        if (!section) {
            throw new common_1.NotFoundException(`Section with ID ${id} not found`);
        }
        return section;
    }
    async remove(id) {
        const result = await this.sectionModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Section with ID ${id} not found`);
        }
    }
};
exports.SectionService = SectionService;
exports.SectionService = SectionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Section.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SectionService);
//# sourceMappingURL=section.service.js.map