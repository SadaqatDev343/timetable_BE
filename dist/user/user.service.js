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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const crypto_1 = require("crypto");
const mongoose_2 = require("mongoose");
const users_modal_1 = require("./users.modal");
const util_1 = require("util");
let UserService = class UserService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(createUserDto) {
        try {
            const { name, password, email, contact, role } = createUserDto;
            const encryptedPassword = await this.encryptPassword(password);
            const createUser = new this.userModel({
                name,
                password: encryptedPassword,
                email,
                contact,
                role,
            });
            const savedUser = await createUser.save();
            const userResponse = savedUser.toObject();
            delete userResponse.password;
            const payload = { userId: userResponse._id, email: userResponse.email };
            const token = await this.jwtService.signAsync(payload);
            return { user: userResponse, token };
        }
        catch (error) {
            console.error('Error creating user:', error);
            throw new Error('Failed to create user');
        }
    }
    async updateUser(userId, updateUserDto) {
        try {
            const { name, email, contact, role, password, OTP } = updateUserDto;
            let updateData = { name, email, contact, role };
            if (OTP) {
                updateData.OTP = OTP;
            }
            if (password) {
                const encryptedPassword = await this.encryptPassword(password);
                updateData.password = encryptedPassword;
            }
            const updatedUser = await this.userModel
                .findByIdAndUpdate(userId, updateData, { new: true })
                .select('-password -__v')
                .exec();
            if (!updatedUser) {
                throw new Error('User not found');
            }
            return updatedUser.toObject();
        }
        catch (error) {
            console.error('Error updating user:', error);
            throw new Error('Failed to update user');
        }
    }
    async logIn(email, password) {
        try {
            const user = await this.userModel
                .findOne({ email })
                .select('-__v')
                .exec();
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            const [storedIv] = user.password.split('|');
            const encryptedPassword = await this.encryptPasswordWithIv(password, storedIv);
            if (encryptedPassword !== user.password) {
                throw new common_1.UnauthorizedException('Invalid password');
            }
            if (!['student', 'teacher', 'staff'].includes(user.role)) {
                throw new common_1.UnauthorizedException('Unauthorized role');
            }
            const payload = { userId: user._id, email: user.email, role: user.role };
            const accessToken = await this.jwtService.signAsync(payload);
            return { user, access_Token: accessToken };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async adminLogin(email, password) {
        try {
            const user = await this.userModel
                .findOne({ email })
                .select('-__v')
                .exec();
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            if (user.role !== 'admin') {
                throw new common_1.UnauthorizedException('Unauthorized role');
            }
            const [storedIv] = user.password.split('|');
            const encryptedPassword = await this.encryptPasswordWithIv(password, storedIv);
            if (encryptedPassword !== user.password) {
                throw new common_1.UnauthorizedException('Invalid credentials');
            }
            const payload = { userId: user._id, email: user.email };
            const accessToken = await this.jwtService.signAsync(payload);
            return { user, access_Token: accessToken };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
    }
    async getAllUsers(email) {
        try {
            const query = email ? { email } : {};
            const users = await this.userModel.find(query).select('-password').exec();
            return users;
        }
        catch (error) {
            throw new Error('Failed to retrieve users');
        }
    }
    async getUserByEmail(email) {
        try {
            const query = email ? { email } : {};
            const user = await this.userModel.findOne(query).select('-password').exec();
            return user;
        }
        catch (error) {
            throw new Error('Failed to retrieve users');
        }
    }
    async verifyOTP(OTP, email) {
        try {
            const user = await this.userModel.findOne({ email });
            if (user) {
                if (OTP === user.OTP) {
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async resetPassword(email, newPassword) {
        try {
            const user = await this.userModel.findOne({ email });
            if (user) {
                const encryptedPassword = await this.encryptPassword(newPassword);
                const updatedUser = await this.userModel
                    .findByIdAndUpdate(user._id, {
                    password: encryptedPassword
                }, {
                    new: true
                })
                    .select('-password -__v')
                    .exec();
                return updatedUser.toObject();
            }
            throw new Error("User not Found");
        }
        catch (error) {
            throw new Error(error.message);
        }
    }
    async encryptPassword(password) {
        try {
            const iv = (0, crypto_1.randomBytes)(16);
            return await this.encryptPasswordWithIv(password, iv.toString('hex'));
        }
        catch (error) {
            throw new Error('Failed to encrypt password');
        }
    }
    async encryptPasswordWithIv(password, ivHex) {
        try {
            const iv = Buffer.from(ivHex, 'hex');
            const key = (await (0, util_1.promisify)(crypto_1.scrypt)('password', 'salt', 32));
            const cipher = (0, crypto_1.createCipheriv)('aes-256-ctr', key, iv);
            const encryptedPassword = Buffer.concat([
                cipher.update(password),
                cipher.final(),
            ]);
            return `${ivHex}|${encryptedPassword.toString('hex')}`;
        }
        catch (error) {
            throw new Error('Failed to encrypt password with IV');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_modal_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map