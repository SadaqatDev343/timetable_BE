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
exports.TimetableService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let TimetableService = class TimetableService {
    constructor(timetableModel) {
        this.timetableModel = timetableModel;
    }
    async create(createTimeTableDto) {
        const newTimetable = new this.timetableModel(createTimeTableDto);
        return newTimetable.save();
    }
    async findAll() {
        return this.timetableModel.find().populate('department discipline semester section teacher subject room').exec();
    }
    async findOne(id) {
        const timetable = await this.timetableModel.findById(id).populate('department discipline semester section teacher subject room').exec();
        if (!timetable) {
            throw new common_1.NotFoundException(`Timetable with ID "${id}" not found`);
        }
        return timetable;
    }
    async update(id, updateTimeTableDto) {
        const updatedTimetable = await this.timetableModel
            .findByIdAndUpdate(id, updateTimeTableDto, { new: true })
            .exec();
        if (!updatedTimetable) {
            throw new common_1.NotFoundException(`Timetable with ID "${id}" not found`);
        }
        return updatedTimetable;
    }
    async findBySection(sectionId) {
        const timetables = await this.timetableModel
            .find({ section: sectionId })
            .populate('department')
            .populate('discipline')
            .populate('semester')
            .populate('teacher')
            .populate('subject')
            .populate('room')
            .exec();
        if (timetables.length === 0) {
            throw new common_1.NotFoundException(`No timetables found for section ID "${sectionId}"`);
        }
        return timetables;
    }
    async remove(id) {
        const deletedTimetable = await this.timetableModel.findByIdAndDelete(id).exec();
        if (!deletedTimetable) {
            throw new common_1.NotFoundException(`Timetable with ID "${id}" not found`);
        }
    }
};
exports.TimetableService = TimetableService;
exports.TimetableService = TimetableService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Timetable.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TimetableService);
//# sourceMappingURL=timetable.service.js.map