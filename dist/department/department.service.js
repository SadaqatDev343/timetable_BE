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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
let DepartmentService = class DepartmentService {
    constructor(departmentModel) {
        this.departmentModel = departmentModel;
    }
    async createDepartment(createDepartmentDto) {
        const newDepartment = new this.departmentModel(createDepartmentDto);
        return await newDepartment.save();
    }
    async updateDepartment(id, updateDepartmentDto) {
        const updatedDepartment = await this.departmentModel.findByIdAndUpdate(id, updateDepartmentDto, { new: true }).exec();
        if (!updatedDepartment) {
            throw new common_1.NotFoundException('Department not found');
        }
        return updatedDepartment;
    }
    async getDepartmentById(id) {
        const department = await this.departmentModel.findById(id).exec();
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        return department;
    }
    async getAllDepartments() {
        return await this.departmentModel.find().exec();
    }
    async deleteDepartment(id) {
        const result = await this.departmentModel.deleteOne({ _id: id }).exec();
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Department not found');
        }
    }
    async getDepartmentByName(name) {
        const department = await this.departmentModel.findOne({ name }).exec();
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        return department;
    }
};
exports.DepartmentService = DepartmentService;
exports.DepartmentService = DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Department.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DepartmentService);
//# sourceMappingURL=department.service.js.map