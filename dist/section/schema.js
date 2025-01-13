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
exports.SectionSchema = exports.Section = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schema_1 = require("../department/schema");
const schema_2 = require("../discipline/schema");
const schema_3 = require("../semester/schema");
const schema_4 = require("../teacher/schema");
let Section = class Section extends mongoose_2.Document {
};
exports.Section = Section;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Section.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Section.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Section.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: schema_3.Semester.name }),
    __metadata("design:type", String)
], Section.prototype, "semester", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: schema_2.Discipline.name }),
    __metadata("design:type", String)
], Section.prototype, "discipline", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: schema_1.Department.name }),
    __metadata("design:type", String)
], Section.prototype, "department", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, ref: schema_4.Teacher.name }),
    __metadata("design:type", String)
], Section.prototype, "teacher", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Section.prototype, "capacity", void 0);
exports.Section = Section = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Section);
exports.SectionSchema = mongoose_1.SchemaFactory.createForClass(Section);
//# sourceMappingURL=schema.js.map