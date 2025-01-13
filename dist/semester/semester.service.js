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
exports.SemesterService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let SemesterService = class SemesterService {
    constructor(semesterModel) {
        this.semesterModel = semesterModel;
    }
    async create(createSemesterDto) {
        const newSemester = new this.semesterModel(createSemesterDto);
        return newSemester.save();
    }
    async findAll() {
        return this.semesterModel.find().populate('discipline').populate('department').exec();
    }
    async findOne(id) {
        const semester = await this.semesterModel.findById(id).populate('discipline').populate('department').exec();
        if (!semester) {
            throw new common_1.NotFoundException(`Semester with ID ${id} not found`);
        }
        return semester;
    }
    async findByName(name) {
        const semesters = await this.semesterModel
            .find({ name })
            .populate('discipline')
            .populate('department')
            .exec();
        if (semesters.length === 0) {
            throw new common_1.NotFoundException(`No semesters with name "${name}" found`);
        }
        return semesters;
    }
    async findByDiscipline(disciplineId) {
        const semesters = await this.semesterModel
            .find({
            $or: [
                { 'discipline': disciplineId },
                { 'discipline._id': disciplineId }
            ]
        })
            .populate('discipline')
            .populate('department')
            .exec();
        if (semesters.length === 0) {
            throw new common_1.NotFoundException(`No semesters found for discipline ID "${disciplineId}"`);
        }
        return semesters;
    }
    async update(id, updateSemesterDto) {
        const updatedSemester = await this.semesterModel
            .findByIdAndUpdate(id, updateSemesterDto, { new: true })
            .populate('discipline')
            .populate('department')
            .exec();
        if (!updatedSemester) {
            throw new common_1.NotFoundException(`Semester with ID ${id} not found`);
        }
        return updatedSemester;
    }
    async remove(id) {
        const result = await this.semesterModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Semester with ID ${id} not found`);
        }
    }
};
exports.SemesterService = SemesterService;
exports.SemesterService = SemesterService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Semester.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SemesterService);
//# sourceMappingURL=semester.service.js.map