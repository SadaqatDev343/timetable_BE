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
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subject_service_1 = require("./subject.service");
const dto_1 = require("./dto");
let SubjectController = class SubjectController {
    constructor(subjectService) {
        this.subjectService = subjectService;
    }
    async create(response, createSubjectDto) {
        try {
            const subject = await this.subjectService.create(createSubjectDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Subject created successfully',
                data: subject,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to create subject',
                error: error.message,
            });
        }
    }
    async findAll(response) {
        try {
            const subjects = await this.subjectService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Subjects retrieved successfully',
                data: subjects,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve subjects',
                error: error.message,
            });
        }
    }
    async findOne(response, id) {
        try {
            const subject = await this.subjectService.findOne(id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Subject retrieved successfully',
                data: subject,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Subject not found',
                error: error.message,
            });
        }
    }
    async update(response, id, updateSubjectDto) {
        try {
            const subject = await this.subjectService.update(id, updateSubjectDto);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Subject updated successfully',
                data: subject,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to update subject',
                error: error.message,
            });
        }
    }
    async remove(response, id) {
        try {
            await this.subjectService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Subject deleted successfully',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to delete subject',
                error: error.message,
            });
        }
    }
};
exports.SubjectController = SubjectController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateSubjectDto]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SubjectController.prototype, "remove", null);
exports.SubjectController = SubjectController = __decorate([
    (0, common_1.Controller)('subjects'),
    __metadata("design:paramtypes", [subject_service_1.SubjectService])
], SubjectController);
//# sourceMappingURL=subject.controller.js.map