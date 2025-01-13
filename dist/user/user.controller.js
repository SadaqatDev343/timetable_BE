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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./user.dto");
const user_service_1 = require("./user.service");
const mailer_service_1 = require("../mailer/mailer.service");
let UserController = class UserController {
    constructor(userService, mailerService) {
        this.userService = userService;
        this.mailerService = mailerService;
        this.generateOTP = () => {
            const otp = Math.floor(1000 + Math.random() * 9000);
            return otp.toString();
        };
    }
    async create(response, createUserDto) {
        try {
            console.log('call register api');
            const { user, token } = await this.userService.createUser(createUserDto);
            return response.status(common_1.HttpStatus.CREATED).json({
                statusCode: common_1.HttpStatus.CREATED,
                message: 'User created successfully',
                data: { user, token },
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to create user',
                error: error.message,
            });
        }
    }
    async login(response, email, password) {
        try {
            const user = await this.userService.logIn(email, password);
            if (!user) {
                throw new common_1.HttpException('Connect to the admin', common_1.HttpStatus.UNAUTHORIZED);
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Login successful',
                data: user,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.UNAUTHORIZED).json({
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: 'Login failed',
                error: error.message,
            });
        }
    }
    async adminLogin(response, email, password) {
        try {
            const user = await this.userService.adminLogin(email, password);
            if (!user) {
                throw new common_1.HttpException('Connect to the admin', common_1.HttpStatus.UNAUTHORIZED);
            }
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Login successful',
                data: user,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.UNAUTHORIZED).json({
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
                message: 'Login failed',
                error: error.message,
            });
        }
    }
    async update(response, userId, updateUserDto) {
        try {
            const updatedUser = await this.userService.updateUser(userId, updateUserDto);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'User updated successfully',
                data: updatedUser,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'Failed to update user',
                error: error.message,
            });
        }
    }
    async forgetPassword(response, email) {
        try {
            const user = await this.userService.getUserByEmail(email);
            if (user) {
                const OTP = this.generateOTP();
                await this.mailerService.sendMail(user.email, 'OTP', 'Your OTP: ' + OTP);
                await this.userService.updateUser(user._id, { OTP });
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: common_1.HttpStatus.OK,
                    message: 'Email sent to User',
                    data: user,
                });
            }
            return response.status(common_1.HttpStatus.NOT_FOUND).json({
                statusCode: common_1.HttpStatus.NOT_FOUND,
                message: 'User not found',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
    async verifyOTP(response, body) {
        const { OTP, email } = body;
        if (!OTP || !email) {
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'OTP and email are required',
            });
        }
        try {
            const isVerified = await this.userService.verifyOTP(OTP, email);
            if (isVerified) {
                return response.status(common_1.HttpStatus.OK).json({
                    statusCode: common_1.HttpStatus.OK,
                    message: 'OTP Verified',
                });
            }
            return response.status(common_1.HttpStatus.BAD_REQUEST).json({
                statusCode: common_1.HttpStatus.BAD_REQUEST,
                message: 'OTP Invalid',
            });
        }
        catch (error) {
            console.error('Error verifying OTP:', error);
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal server error',
            });
        }
    }
    async resetPassword(response, Body) {
        const { email, newPassword } = Body;
        try {
            await this.userService.resetPassword(email, newPassword);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Password Updated',
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: error.message,
            });
        }
    }
    async getAllUsers(response, email) {
        try {
            const users = await this.userService.getAllUsers(email);
            return response.status(common_1.HttpStatus.OK).json({
                statusCode: common_1.HttpStatus.OK,
                message: 'Users retrieved successfully',
                data: users,
            });
        }
        catch (error) {
            return response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Failed to retrieve users',
                error: error.message,
            });
        }
    }
    getEpochTime() {
        return Date.now();
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.createUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('adminLogin'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('email')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "adminLogin", null);
__decorate([
    (0, common_1.Patch)('update/:id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('fogetPassword'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgetPassword", null);
__decorate([
    (0, common_1.Post)('verifyOTP'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "verifyOTP", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)(':email?'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUsers", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        mailer_service_1.MailerService])
], UserController);
//# sourceMappingURL=user.controller.js.map