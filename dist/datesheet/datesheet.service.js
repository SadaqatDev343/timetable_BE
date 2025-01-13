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
exports.DatesheetService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let DatesheetService = class DatesheetService {
    constructor(datesheetModel) {
        this.datesheetModel = datesheetModel;
    }
    async create(createDatesheetDto) {
        const newDatesheet = new this.datesheetModel(createDatesheetDto);
        return newDatesheet.save();
    }
    async findAll() {
        return this.datesheetModel.find().populate('department discipline semester section subject room').exec();
    }
    async findOne(id) {
        const datesheet = await this.datesheetModel.findById(id).populate('department discipline semester section subject room').exec();
        if (!datesheet) {
            throw new common_1.NotFoundException(`Datesheet with ID "${id}" not found`);
        }
        return datesheet;
    }
    async findBySection(sectionId) {
        const Datesheet = await this.datesheetModel
            .find({ section: sectionId })
            .populate('department')
            .populate('discipline')
            .populate('semester')
            .populate('subject')
            .populate('room')
            .exec();
        if (Datesheet.length === 0) {
            throw new common_1.NotFoundException(`No timetables found for section ID "${sectionId}"`);
        }
        return Datesheet;
    }
    async update(id, updateDatesheetDto) {
        const updatedDatesheet = await this.datesheetModel
            .findByIdAndUpdate(id, updateDatesheetDto, { new: true })
            .exec();
        if (!updatedDatesheet) {
            throw new common_1.NotFoundException(`Datesheet with ID "${id}" not found`);
        }
        return updatedDatesheet;
    }
    async remove(id) {
        const deletedDatesheet = await this.datesheetModel.findByIdAndDelete(id).exec();
        if (!deletedDatesheet) {
            throw new common_1.NotFoundException(`Datesheet with ID "${id}" not found`);
        }
    }
};
exports.DatesheetService = DatesheetService;
exports.DatesheetService = DatesheetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Datesheet.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DatesheetService);
//# sourceMappingURL=datesheet.service.js.map