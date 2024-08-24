import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User, UserSchema } from './user/users.modal'; // Correct import path for your User schema

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://timetable:timetable123@cluster0.cql62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Configure MongoDB connection
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // Register User schema
    JwtModule.register({
      secret: 'default_secret', // Ensure you have a fallback secret
      signOptions: { expiresIn: '1h' }, // Optional: Configure token expiration
    }),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
