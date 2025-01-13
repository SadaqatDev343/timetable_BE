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
exports.SemesterController = void 0;
const common_1 = require("@nestjs/common");
const semester_service_1 = require("./semester.service");
const dto_1 = require("./dto");
let SemesterController = class SemesterController {
    constructor(semesterService) {
        this.semesterService = semesterService;
    }
    async create(createSemesterDto) {
        return this.semesterService.create(createSemesterDto);
    }
    async findAll() {
        return this.semesterService.findAll();
    }
    async findOne(id) {
        return this.semesterService.findOne(id);
    }
    async findByName(name) {
        return this.semesterService.findByName(name);
    }
    async findByDiscipline(disciplineId) {
        return this.semesterService.findByDiscipline(disciplineId);
    }
    async update(id, updateSemesterDto) {
        return this.semesterService.update(id, updateSemesterDto);
    }
    async remove(id) {
        return this.semesterService.remove(id);
    }
};
exports.SemesterController = SemesterController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateSemesterDto]),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('by-name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('by-discipline/:disciplineId'),
    __param(0, (0, common_1.Param)('disciplineId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "findByDiscipline", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateSemesterDto]),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SemesterController.prototype, "remove", null);
exports.SemesterController = SemesterController = __decorate([
    (0, common_1.Controller)('semesters'),
    __metadata("design:paramtypes", [semester_service_1.SemesterService])
], SemesterController);
//# sourceMappingURL=semester.controller.js.map