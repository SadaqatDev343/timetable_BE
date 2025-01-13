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
exports.DisciplineController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const discipline_service_1 = require("./discipline.service");
let DisciplineController = class DisciplineController {
    constructor(disciplineService) {
        this.disciplineService = disciplineService;
    }
    async create(response, createDisciplineDto) {
        try {
            const discipline = await this.disciplineService.create(createDisciplineDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Discipline created successfully',
                data: discipline,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to create discipline',
                error: error.message,
            });
        }
    }
    async findAll(response) {
        try {
            const disciplines = await this.disciplineService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Disciplines retrieved successfully',
                data: disciplines,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve disciplines',
                error: error.message,
            });
        }
    }
    async findOne(response, id) {
        try {
            const discipline = await this.disciplineService.findOne(id);
            if (!discipline) {
                return response.status(common_1.HttpStatus.NOT_FOUND).json({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Discipline not found',
                });
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Discipline retrieved successfully',
                data: discipline,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve discipline',
                error: error.message,
            });
        }
    }
    async findByName(response, name) {
        try {
            const discipline = await this.disciplineService.findByName(name);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Discipline retrieved successfully',
                data: discipline,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: error.message,
            });
        }
    }
    async findByDepartment(response, departmentId) {
        try {
            const disciplines = await this.disciplineService.findByDepartment(departmentId);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Disciplines retrieved successfully',
                data: disciplines,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: error.message,
            });
        }
    }
    async update(response, id, updateDisciplineDto) {
        try {
            const discipline = await this.disciplineService.update(id, updateDisciplineDto);
            if (!discipline) {
                return response.status(common_1.HttpStatus.NOT_FOUND).json({
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                    message: 'Discipline not found',
                });
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Discipline updated successfully',
                data: discipline,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to update discipline',
                error: error.message,
            });
        }
    }
    async remove(response, id) {
        try {
            await this.disciplineService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Discipline deleted successfully',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to delete discipline',
                error: error.message,
            });
        }
    }
};
exports.DisciplineController = DisciplineController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateDisciplineDto]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('by-name/:name'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('by-department/:departmentId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('departmentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "findByDepartment", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateDisciplineDto]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DisciplineController.prototype, "remove", null);
exports.DisciplineController = DisciplineController = __decorate([
    (0, common_1.Controller)('disciplines'),
    __metadata("design:paramtypes", [discipline_service_1.DisciplineService])
], DisciplineController);
//# sourceMappingURL=discipline.controller.js.map