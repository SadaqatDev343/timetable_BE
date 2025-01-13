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
exports.SectionController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const section_service_1 = require("./section.service");
let SectionController = class SectionController {
    constructor(sectionService) {
        this.sectionService = sectionService;
    }
    async create(response, createSectionDto) {
        try {
            const section = await this.sectionService.create(createSectionDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Section created successfully',
                data: section,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to create section',
                error: error.message,
            });
        }
    }
    async findAll(response) {
        try {
            const sections = await this.sectionService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Sections retrieved successfully',
                data: sections,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve sections',
                error: error.message,
            });
        }
    }
    async findOne(response, id) {
        try {
            const section = await this.sectionService.findOne(id);
            if (!section) {
                return response.status(common_1.HttpStatus.NOT_FOUND).json({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Section not found',
                });
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Section retrieved successfully',
                data: section,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve section',
                error: error.message,
            });
        }
    }
    async findByName(response, name) {
        try {
            const section = await this.sectionService.findByName(name);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Section retrieved successfully',
                data: section,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Section not found',
                error: error.message,
            });
        }
    }
    async findBySemester(response, semesterId) {
        try {
            const sections = await this.sectionService.findBySemester(semesterId);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Sections retrieved successfully',
                data: sections,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Sections not found',
                error: error.message,
            });
        }
    }
    async update(response, id, updateSectionDto) {
        try {
            const section = await this.sectionService.update(id, updateSectionDto);
            if (!section) {
                return response.status(common_1.HttpStatus.NOT_FOUND).json({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Section not found',
                });
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Section updated successfully',
                data: section,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to update section',
                error: error.message,
            });
        }
    }
    async remove(response, id) {
        try {
            await this.sectionService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Section deleted successfully',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to delete section',
                error: error.message,
            });
        }
    }
};
exports.SectionController = SectionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateSectionDto]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('by-name/:name'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('by-semester/:semesterId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('semesterId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "findBySemester", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateSectionDto]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], SectionController.prototype, "remove", null);
exports.SectionController = SectionController = __decorate([
    (0, common_1.Controller)('sections'),
    __metadata("design:paramtypes", [section_service_1.SectionService])
], SectionController);
//# sourceMappingURL=section.controller.js.map