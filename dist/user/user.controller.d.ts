import { Response } from 'express';
import { createUserDto } from './user.dto';
import { UserService } from './user.service';
import { MailerService } from '../mailer/mailer.service';
export declare class UserController {
    private readonly userService;
    private readonly mailerService;
    constructor(userService: UserService, mailerService: MailerService);
    create(response: Response, createUserDto: createUserDto): Promise<Response<any, Record<string, any>>>;
    login(response: Response, email: string, password: string): Promise<Response<any, Record<string, any>>>;
    adminLogin(response: Response, email: string, password: string): Promise<Response<any, Record<string, any>>>;
    update(response: Response, userId: string, updateUserDto: Partial<createUserDto>): Promise<Response<any, Record<string, any>>>;
    forgetPassword(response: Response, email: string): Promise<Response<any, Record<string, any>>>;
    verifyOTP(response: Response, body: {
        OTP: string;
        email: string;
    }): Promise<Response<any, Record<string, any>>>;
    resetPassword(response: Response, Body: {
        email: string;
        newPassword: string;
    }): Promise<Response<any, Record<string, any>>>;
    getAllUsers(response: Response, email: string): Promise<Response<any, Record<string, any>>>;
    generateOTP: () => string;
    getEpochTime(): number;
}
