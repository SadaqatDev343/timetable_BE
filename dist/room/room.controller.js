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
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
const dto_1 = require("./dto");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async create(response, createRoomDto) {
        try {
            const room = await this.roomService.create(createRoomDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Room created successfully',
                data: room,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to create room',
                error: error.message,
            });
        }
    }
    async findAll(response) {
        try {
            const rooms = await this.roomService.findAll();
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Rooms retrieved successfully',
                data: rooms,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve rooms',
                error: error.message,
            });
        }
    }
    async findOne(response, id) {
        try {
            const room = await this.roomService.findOne(id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Room retrieved successfully',
                data: room,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'Room not found',
                error: error.message,
            });
        }
    }
    async update(response, id, updateRoomDto) {
        try {
            const room = await this.roomService.update(id, updateRoomDto);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Room updated successfully',
                data: room,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to update room',
                error: error.message,
            });
        }
    }
    async remove(response, id) {
        try {
            await this.roomService.remove(id);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Room deleted successfully',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to delete room',
                error: error.message,
            });
        }
    }
};
exports.RoomController = RoomController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dto_1.CreateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, dto_1.UpdateRoomDto]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "remove", null);
exports.RoomController = RoomController = __decorate([
    (0, common_1.Controller)('rooms'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
//# sourceMappingURL=room.controller.js.map