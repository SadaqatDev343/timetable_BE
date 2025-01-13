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
exports.TeacherService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("./schema");
const types_1 = require("../types");
const user_service_1 = require("../user/user.service");
let TeacherService = class TeacherService {
    constructor(teacherModel, userService) {
        this.teacherModel = teacherModel;
        this.userService = userService;
    }
    async createTeacher(createTeacherDto) {
        const { email, name, phoneNumber, password } = createTeacherDto;
        const createUserDto = {
            name,
            email,
            password,
            contact: phoneNumber,
            role: types_1.UserRole.Teacher,
        };
        try {
            const encryptedPassword = await this.userService.encryptPassword(createUserDto.password);
            createUserDto.password = encryptedPassword;
            const { user: createdUser } = await this.userService.createUser(createUserDto);
            const teacher = new this.teacherModel({
                ...createTeacherDto,
                userId: createdUser._id,
            });
            await teacher.save();
            return teacher;
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.ConflictException('Email already exists');
            }
            throw new common_1.InternalServerErrorException('Failed to create teacher');
        }
    }
    async findAll() {
        return this.teacherModel.find().exec();
    }
    async findOne(id) {
        const teacher = await this.teacherModel.findById(id).exec();
        if (!teacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        return teacher;
    }
    async update(id, updateTeacherDto) {
        const updatedTeacher = await this.teacherModel.findByIdAndUpdate(id, updateTeacherDto, { new: true }).exec();
        if (!updatedTeacher) {
            throw new common_1.NotFoundException('Teacher not found');
        }
        return updatedTeacher;
    }
    async delete(id) {
        const result = await this.teacherModel.findByIdAndDelete(id).exec();
        if (result === null) {
            throw new common_1.NotFoundException('Teacher not found');
        }
    }
};
exports.TeacherService = TeacherService;
exports.TeacherService = TeacherService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schema_1.Teacher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        user_service_1.UserService])
], TeacherService);
//# sourceMappingURL=teacher.service.js.map