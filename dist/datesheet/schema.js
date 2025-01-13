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
exports.DatesheetSchema = exports.Datesheet = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Datesheet = class Datesheet extends mongoose_2.Document {
};
exports.Datesheet = Datesheet;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Department', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Datesheet.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Discipline', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Datesheet.prototype, "discipline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Semester', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Datesheet.prototype, "semester", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Section', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Datesheet.prototype, "section", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Subject', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Datesheet.prototype, "subject", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Room', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Datesheet.prototype, "room", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], Datesheet.prototype, "examDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Datesheet.prototype, "startTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Datesheet.prototype, "endTime", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Datesheet.prototype, "examType", void 0);
exports.Datesheet = Datesheet = __decorate([
    (0, mongoose_1.Schema)()
], Datesheet);
exports.DatesheetSchema = mongoose_1.SchemaFactory.createForClass(Datesheet);
//# sourceMappingURL=schema.js.map