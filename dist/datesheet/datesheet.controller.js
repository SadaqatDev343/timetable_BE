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
exports.DatesheetController = void 0;
const common_1 = require("@nestjs/common");
const datesheet_service_1 = require("./datesheet.service");
const dto_1 = require("./dto");
let DatesheetController = class DatesheetController {
    constructor(datesheetService) {
        this.datesheetService = datesheetService;
    }
    create(createDatesheetDto) {
        return this.datesheetService.create(createDatesheetDto);
    }
    findAll() {
        return this.datesheetService.findAll();
    }
    findOne(id) {
        return this.datesheetService.findOne(id);
    }
    async findBySection(response, sectionId) {
        try {
            const timetables = await this.datesheetService.findBySection(sectionId);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'datesheet retrieved successfully',
                data: timetables,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'datesheet not found',
                error: error.message,
            });
        }
    }
    update(id, updateDatesheetDto) {
        return this.datesheetService.update(id, updateDatesheetDto);
    }
    remove(id) {
        return this.datesheetService.remove(id);
    }
};
exports.DatesheetController = DatesheetController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDatesheetDto]),
    __metadata("design:returntype", void 0)
], DatesheetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DatesheetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatesheetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('by-section/:sectionId'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('sectionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], DatesheetController.prototype, "findBySection", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateDatesheetDto]),
    __metadata("design:returntype", void 0)
], DatesheetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DatesheetController.prototype, "remove", null);
exports.DatesheetController = DatesheetController = __decorate([
    (0, common_1.Controller)('datesheet'),
    __metadata("design:paramtypes", [datesheet_service_1.DatesheetService])
], DatesheetController);
//# sourceMappingURL=datesheet.controller.js.map