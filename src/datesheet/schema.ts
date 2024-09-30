import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Datesheet extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Department', required: true })
  department: Types.ObjectId; // References Department ObjectId

  @Prop({ type: Types.ObjectId, ref: 'Discipline', required: true })
  discipline: Types.ObjectId; // References Discipline ObjectId

  @Prop({ type: Types.ObjectId, ref: 'Semester', required: true })
  semester: Types.ObjectId; // References Semester ObjectId

  @Prop({ type: Types.ObjectId, ref: 'Section', required: true })
  section: Types.ObjectId; // References Section ObjectId

  @Prop({ type: Types.ObjectId, ref: 'Subject', required: true })
  subject: Types.ObjectId; // Refearences Subject ObjectId

  @Prop({ type: Types.ObjectId, ref: 'Room', required: true })
  room: Types.ObjectId; // Exam room

  @Prop({ type: Date, required: true })
  examDate: Date; // Date of the exam

  @Prop({ type: String, required: true })
  startTime:string ; // Start time of the exam

  @Prop({ type: String, required: true })
  endTime: string; // End time of the exam

  @Prop({ type: String, required: true })
  examType: string; // Type of the exam, e.g., "Midterm", "Final", etc.

  // You can add more fields here as needed (e.g., invigilator details)
}

export const DatesheetSchema = SchemaFactory.createForClass(Datesheet);
