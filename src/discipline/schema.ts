import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Department } from 'src/department/schema';
import { Teacher } from 'src/teacher/schema';
 // Import the Department schema

@Schema({ timestamps: true })
export class Discipline extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description?: string;

  @Prop({ type: String, required: true, ref: Teacher.name })
  teacher: string; 

  @Prop({ type: String, required: true, ref: Department.name })
  department: string; // ObjectId reference to Department
}

export const DisciplineSchema = SchemaFactory.createForClass(Discipline);
