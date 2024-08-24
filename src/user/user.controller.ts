import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Patch,
  Res
} from '@nestjs/common';
import { Response } from 'express';
import { createUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  
  @Post('register')
  async create(@Res() response: Response, @Body() createUserDto: createUserDto) {
    try {
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
  @Patch('update/:id')
  async update(
    @Res() response: Response,
    @Param('id') userId: string,
    @Body() updateUserDto: Partial<createUserDto>
  ) {
    try {
      const updatedUser = await this.userService.updateUser(userId, updateUserDto);
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

  @Get(':email?')
  async getAllUsers(
    @Res() response: Response,
    @Param('email') email: string,
  ) {
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

 

}


