import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { Model } from 'mongoose';
import { createUserDto } from './user.dto';
import { User } from 'src/user/users.modal';
import { promisify } from 'util';
import { IAuthResponse } from 'src/types';



@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(createUserDto: createUserDto): Promise<{ user: Omit<User, 'password'>; token: string }> {
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

      // Generate JWT token
      const payload = { userId: userResponse._id, email: userResponse.email };
      const token = await this.jwtService.signAsync(payload);

      return { user: userResponse, token };
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }
  async updateUser(userId: string, updateUserDto: Partial<createUserDto>): Promise<Omit<User, 'password'>> {
    try {
      const { name, email, contact, role, password } = updateUserDto;

      let updateData: Partial<User> = { name, email, contact, role };

      if (password) {
        // Encrypt the new password if provided
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
    } catch (error) {
      console.error('Error updating user:', error);
      throw new Error('Failed to update user');
    }
  }

  async logIn(email: string, password: string): Promise<IAuthResponse> {
    try {
      const user = await this.userModel
        .findOne({ email })
        .select('-__v')
        .exec();
  
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
  
      const [storedIv] = user.password.split('|');
      const encryptedPassword = await this.encryptPasswordWithIv(password, storedIv);
  
      if (encryptedPassword !== user.password) {
        throw new UnauthorizedException('Invalid password');
      }
  
      // Check user role
      if (!['student', 'teacher', 'staff'].includes(user.role)) {
        throw new UnauthorizedException('Unauthorized role');
      }
  
      const payload = { userId: user._id, email: user.email, role: user.role };
      const accessToken = await this.jwtService.signAsync(payload);
  
      return { user, access_Token: accessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
  
  async adminLogin(email: string, password: string): Promise<IAuthResponse> {
    try {
      // Find the user by email
      const user = await this.userModel
        .findOne({ email })
        .select('-__v')
        .exec();
  
      // Check if user exists
      if (!user) {
        throw new UnauthorizedException('User not found');
      }
  
      // Check if the user's role is admin
      if (user.role !== 'admin') {
        throw new UnauthorizedException('Unauthorized role');
      }
  
      // Decrypt and verify the password
      const [storedIv] = user.password.split('|');
      const encryptedPassword = await this.encryptPasswordWithIv(password, storedIv);
  
      // Validate the password
      if (encryptedPassword !== user.password) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      // Generate an access token
      const payload = { userId: user._id, email: user.email };
      const accessToken = await this.jwtService.signAsync(payload);
  
      // Return the user and access token
      return { user, access_Token: accessToken };
    } catch (error) {
      // Handle and rethrow errors with a generic message
      throw new UnauthorizedException('Invalid credentials');
    }
  }
  

  async getAllUsers(email?: string): Promise<Omit<User, 'password'>[]> {
    try {
      const query = email ? { email } : {};
      const users = await this.userModel.find(query).select('-password').exec();
      return users;
    } catch (error) {
      throw new Error('Failed to retrieve users');
    }
  }



  

   async encryptPassword(password: string): Promise<string> {
    try {
      const iv = randomBytes(16);
      return await this.encryptPasswordWithIv(password, iv.toString('hex'));
    } catch (error) {
      throw new Error('Failed to encrypt password');
    }
  }

   async encryptPasswordWithIv(
    password: string,
    ivHex: string,
  ): Promise<string> {
    try {
      const iv = Buffer.from(ivHex, 'hex');
      const key = (await promisify(scrypt)(
        'password',
        'salt',
        32,
      )) as Buffer;
      const cipher = createCipheriv('aes-256-ctr', key, iv);
      const encryptedPassword = Buffer.concat([
        cipher.update(password),
        cipher.final(),
      ]);

      return `${ivHex}|${encryptedPassword.toString('hex')}`;
    } catch (error) {
      throw new Error('Failed to encrypt password with IV');
    }
  }
}
