import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Patch,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { createUserDto } from './user.dto';
import { UserService } from './user.service';
import { MailerService } from '../mailer/mailer.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly mailerService: MailerService,
  ) {}

  @Post('register')
  async create(
    @Res() response: Response,
    @Body() createUserDto: createUserDto,
  ) {
    try {
      console.log('call register api');
      const { user, token } = await this.userService.createUser(createUserDto);
      return response.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        message: 'User created successfully',
        data: { user, token },
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to create user',
        error: error.message,
      });
    }
  }

  @Post('login')
  async login(
    @Res() response: Response,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const user = await this.userService.logIn(email, password);
      if (!user) {
        throw new HttpException(
          'Connect to the admin',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Login successful',
        data: user,
      });
    } catch (error) {
      return response.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Login failed',
        error: error.message,
      });
    }
  }
  @Post('adminLogin')
  async adminLogin(
    @Res() response: Response,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    try {
      const user = await this.userService.adminLogin(email, password);
      if (!user) {
        throw new HttpException(
          'Connect to the admin',
          HttpStatus.UNAUTHORIZED,
        );
      }
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Login successful',
        data: user,
      });
    } catch (error) {
      return response.status(HttpStatus.UNAUTHORIZED).json({
        statusCode: HttpStatus.UNAUTHORIZED,
        message: 'Login failed',
        error: error.message,
      });
    }
  }
  @Patch('update/:id')
  async update(
    @Res() response: Response,
    @Param('id') userId: string,
    @Body() updateUserDto: Partial<createUserDto>,
  ) {
    try {
      const updatedUser = await this.userService.updateUser(
        userId,
        updateUserDto,
      );
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'User updated successfully',
        data: updatedUser,
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Failed to update user',
        error: error.message,
      });
    }
  }

  @Post('fogetPassword')
  async forgetPassword(
    @Res() response: Response,
    @Body('email') email: string,
  ) {
    try {
      const user = await this.userService.getUserByEmail(email);
      if (user) {
        const OTP = this.generateOTP();
        await this.mailerService.sendMail(
          user.email,
          'OTP',
          'Your OTP: ' + OTP,
        );
        await this.userService.updateUser(user._id as string, { OTP });
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'Email sent to User',
          data: user,
        });
      }
      return response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  @Post('verifyOTP') // Typically, OTP verification would be a POST request
  async verifyOTP(
    @Res() response: Response,
    @Body() body: { OTP: string; email: string },
  ) {
    const { OTP, email } = body;

    // Input validation (basic example)
    if (!OTP || !email) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'OTP and email are required',
      });
    }

    try {
      // Assuming verifyOTP returns a boolean
      const isVerified = await this.userService.verifyOTP(OTP, email);

      if (isVerified) {
        return response.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          message: 'OTP Verified',
        });
      }

      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'OTP Invalid',
      });
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      });
    }
  }

  @Post('resetPassword')
  async resetPassword(
    @Res() response: Response,
    @Body() Body: { email: string; newPassword: string },
  ) {
    const { email, newPassword } = Body;
    try {
      await this.userService.resetPassword(email, newPassword);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Password Updated',
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  @Get(':email?')
  async getAllUsers(@Res() response: Response, @Param('email') email: string) {
    try {
      const users = await this.userService.getAllUsers(email);
      return response.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Users retrieved successfully',
        data: users,
      });
    } catch (error) {
      return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Failed to retrieve users',
        error: error.message,
      });
    }
  }

  generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
  };

  getEpochTime(): number {
    return Date.now();
  }
}
