import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Department } from 'src/department/schema';
import { Discipline } from 'src/discipline/schema';
import { Semester } from 'src/semester/schema';
import { Teacher } from 'src/teacher/schema';

@Schema({ timestamps: true })
export class Section extends Document {

  
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description?: string;

  @Prop({ type: String, required: true, ref: Semester.name })
  semester: string; // ObjectId reference to Discipline

  @Prop({ type: String, required: true, ref: Discipline.name })
  discipline: string; // ObjectId reference to Discipline

  @Prop({ type: String, required: true, ref: Department.name })
  department: string; // ObjectId reference to Department

  @Prop({ type: String, required: true, ref: Teacher.name })
  teacher: string; // ObjectId reference to Teacher

  @Prop({ required: true })
  capacity: number;
}

export const SectionSchema = SchemaFactory.createForClass(Section);
