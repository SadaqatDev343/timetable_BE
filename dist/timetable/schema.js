"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimetableSchema = exports.Timetable = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Timetable = class Timetable extends mongoose_2.Document {
};
exports.Timetable = Timetable;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Department', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Discipline', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "discipline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Semester', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "semester", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Section', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "section", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Teacher', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "teacher", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Subject', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Room', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Timetable.prototype, "room", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Timetable.prototype, "day", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Timetable.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Timetable.prototype, "endTime", void 0);
exports.Timetable = Timetable = __decorate([
    (0, mongoose_1.Schema)()
], Timetable);
exports.TimetableSchema = mongoose_1.SchemaFactory.createForClass(Timetable);
//# sourceMappingURL=schema.js.map