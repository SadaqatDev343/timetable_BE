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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const schema_1 = require("./schema");
const mongoose_2 = require("@nestjs/mongoose");
let RoomService = class RoomService {
    constructor(roomModel) {
        this.roomModel = roomModel;
    }
    async create(createRoomDto) {
        const newRoom = new this.roomModel(createRoomDto);
        return await newRoom.save();
    }
    async findAll() {
        return await this.roomModel.find().exec();
    }
    async findOne(id) {
        const room = await this.roomModel.findById(id).exec();
        if (!room) {
            throw new common_1.NotFoundException(`Room with ID ${id} not found`);
        }
        return room;
    }
    async update(id, updateRoomDto) {
        const updatedRoom = await this.roomModel.findByIdAndUpdate(id, updateRoomDto, { new: true }).exec();
        if (!updatedRoom) {
            throw new common_1.NotFoundException(`Room with ID ${id} not found`);
        }
        return updatedRoom;
    }
    async remove(id) {
        const result = await this.roomModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Room with ID ${id} not found`);
        }
    }
};
exports.RoomService = RoomService;
exports.RoomService = RoomService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(schema_1.Room.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RoomService);
//# sourceMappingURL=room.service.js.map