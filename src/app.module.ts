import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { Department, DepartmentSchema } from './department/schema';
import { Discipline, DisciplineSchema } from './discipline/schema';
import { Teacher, TeacherSchema } from './teacher/schema';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User, UserSchema } from './user/users.modal'; // Correct import path for your User schema
import { SectionController } from './section/section.controller';
import { SectionService } from './section/section.service';
import { Section, SectionSchema } from './section/schema';
import { DisciplineController } from './discipline/discipline.controller';
import { DisciplineService } from './discipline/discipline.service';
import { SemesterController } from './semester/semester.controller';
import { SemesterService } from './semester/semester.service';
import { Semester, SemesterSchema } from './semester/schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://timetable:timetable123@cluster0.cql62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), // Configure MongoDB connection
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Teacher.name, schema: TeacherSchema },
      { name: Department.name, schema: DepartmentSchema },
      { name: Discipline.name, schema: DisciplineSchema },
      { name: Section.name, schema: SectionSchema },
      { name: Semester.name, schema: SemesterSchema },
    ]),
    JwtModule.register({
      secret: 'default_secret', // Ensure you have a fallback secret
      signOptions: { expiresIn: '1h' }, // Optional: Configure token expiration
    }),
  ],
  controllers: [AppController, UserController, TeacherController, DepartmentController, SectionController,DisciplineController, SemesterController ],
  providers: [AppService, UserService, TeacherService, DepartmentService, SectionService,DisciplineService, SemesterService],
})
export class AppModule {}
