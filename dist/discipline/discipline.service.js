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
exports.DisciplineService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let DisciplineService = class DisciplineService {
    constructor(disciplineModel) {
        this.disciplineModel = disciplineModel;
    }
    async create(createDisciplineDto) {
        const newDiscipline = new this.disciplineModel(createDisciplineDto);
        return await newDiscipline.save();
    }
    async findAll() {
        return await this.disciplineModel.find().exec();
    }
    async findOne(id) {
        const discipline = await this.disciplineModel.findById(id).exec();
        if (!discipline) {
            throw new common_1.NotFoundException(`Discipline with ID ${id} not found`);
        }
        return discipline;
    }
    async findByName(name) {
        const discipline = await this.disciplineModel
            .findOne({ name })
            .populate('department')
            .exec();
        if (!discipline) {
            throw new common_1.NotFoundException(`Discipline with name ${name} not found`);
        }
        return discipline;
    }
    async findByDepartment(departmentId) {
        const disciplines = await this.disciplineModel
            .find({ department: departmentId })
            .populate('department')
            .exec();
        if (!disciplines.length) {
            throw new common_1.NotFoundException(`No disciplines found for department with ID ${departmentId}`);
        }
        return disciplines;
    }
    async update(id, updateDisciplineDto) {
        const discipline = await this.disciplineModel.findByIdAndUpdate(id, updateDisciplineDto, { new: true }).exec();
        if (!discipline) {
            throw new common_1.NotFoundException(`Discipline with ID ${id} not found`);
        }
        return discipline;
    }
    async remove(id) {
        const result = await this.disciplineModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Discipline with ID ${id} not found`);
        }
    }
};
exports.DisciplineService = DisciplineService;
exports.DisciplineService = DisciplineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Discipline.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DisciplineService);
//# sourceMappingURL=discipline.service.js.map