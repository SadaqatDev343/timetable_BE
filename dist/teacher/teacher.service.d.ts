import { Model } from 'mongoose';
import { Teacher } from './schema';
import { CreateTeacherDto, UpdateTeacherDto } from './dto';
import { UserService } from 'src/user/user.service';
export declare class TeacherService {
    private readonly teacherModel;
    private readonly userService;
    constructor(teacherModel: Model<Teacher>, userService: UserService);
    createTeacher(createTeacherDto: CreateTeacherDto): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    findOne(id: string): Promise<Teacher>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher>;
    delete(id: string): Promise<void>;
}
