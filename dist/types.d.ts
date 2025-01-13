import { User } from './user/users.modal';
export declare enum UserRole {
    Admin = "admin",
    Student = "student",
    Teacher = "teacher",
    Staff = "staff"
}
export interface IAuthResponse {
    user: User;
    access_Token: string;
}
