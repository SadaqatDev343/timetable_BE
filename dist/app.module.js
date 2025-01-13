"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const department_controller_1 = require("./department/department.controller");
const department_service_1 = require("./department/department.service");
const schema_1 = require("./department/schema");
const schema_2 = require("./discipline/schema");
const schema_3 = require("./teacher/schema");
const teacher_controller_1 = require("./teacher/teacher.controller");
const teacher_service_1 = require("./teacher/teacher.service");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const users_modal_1 = require("./user/users.modal");
const section_controller_1 = require("./section/section.controller");
const section_service_1 = require("./section/section.service");
const schema_4 = require("./section/schema");
const discipline_controller_1 = require("./discipline/discipline.controller");
const discipline_service_1 = require("./discipline/discipline.service");
const semester_controller_1 = require("./semester/semester.controller");
const semester_service_1 = require("./semester/semester.service");
const schema_5 = require("./semester/schema");
const timetable_controller_1 = require("./timetable/timetable.controller");
const timetable_service_1 = require("./timetable/timetable.service");
const schema_6 = require("./room/schema");
const schema_7 = require("./subject/schema");
const schema_8 = require("./timetable/schema");
const mailer_service_1 = require("./mailer/mailer.service");
const subject_controller_1 = require("./subject/subject.controller");
const room_controller_1 = require("./room/room.controller");
const room_service_1 = require("./room/room.service");
const subject_service_1 = require("./subject/subject.service");
const datesheet_controller_1 = require("./datesheet/datesheet.controller");
const datesheet_service_1 = require("./datesheet/datesheet.service");
const schema_9 = require("./datesheet/schema");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://timetable:timetable123@cluster0.cql62.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
            mongoose_1.MongooseModule.forFeature([
                { name: users_modal_1.User.name, schema: users_modal_1.UserSchema },
                { name: schema_3.Teacher.name, schema: schema_3.TeacherSchema },
                { name: schema_1.Department.name, schema: schema_1.DepartmentSchema },
                { name: schema_2.Discipline.name, schema: schema_2.DisciplineSchema },
                { name: schema_4.Section.name, schema: schema_4.SectionSchema },
                { name: schema_5.Semester.name, schema: schema_5.SemesterSchema },
                { name: schema_6.Room.name, schema: schema_6.RoomSchema },
                { name: schema_7.Subject.name, schema: schema_7.SubjectSchema },
                { name: schema_8.Timetable.name, schema: schema_8.TimetableSchema },
                { name: schema_9.Datesheet.name, schema: schema_9.DatesheetSchema },
            ]),
            jwt_1.JwtModule.register({
                secret: 'default_secret',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController, teacher_controller_1.TeacherController, department_controller_1.DepartmentController, section_controller_1.SectionController, discipline_controller_1.DisciplineController, semester_controller_1.SemesterController, timetable_controller_1.TimetableController, subject_controller_1.SubjectController, room_controller_1.RoomController, datesheet_controller_1.DatesheetController],
        providers: [app_service_1.AppService, user_service_1.UserService, teacher_service_1.TeacherService, department_service_1.DepartmentService, section_service_1.SectionService, discipline_service_1.DisciplineService, semester_service_1.SemesterService, timetable_service_1.TimetableService, mailer_service_1.MailerService, room_service_1.RoomService, subject_service_1.SubjectService, datesheet_service_1.DatesheetService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map