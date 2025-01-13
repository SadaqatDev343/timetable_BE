import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { createUserDto } from './user.dto';
import { User } from 'src/user/users.modal';
import { IAuthResponse } from 'src/types';
import { UpdateUserDto } from './update-User.dto';
export declare class UserService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    createUser(createUserDto: createUserDto): Promise<{
        user: Omit<User, 'password'>;
        token: string;
    }>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<Omit<User, 'password'>>;
    logIn(email: string, password: string): Promise<IAuthResponse>;
    adminLogin(email: string, password: string): Promise<IAuthResponse>;
    getAllUsers(email?: string): Promise<Omit<User, 'password'>[]>;
    getUserByEmail(email?: string): Promise<Omit<User, 'password'>>;
    verifyOTP(OTP: string, email: string): Promise<boolean>;
    resetPassword(email: string, newPassword: string): Promise<User & Required<{
        _id: unknown;
    }>>;
    encryptPassword(password: string): Promise<string>;
    encryptPasswordWithIv(password: string, ivHex: string): Promise<string>;
}
