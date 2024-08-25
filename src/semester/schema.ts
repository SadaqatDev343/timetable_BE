import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Department } from 'src/department/schema';
import { Discipline } from 'src/discipline/schema';


@Schema()
export class Semester extends Document {

  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  code: string;

  @Prop()
  description: string;

  @Prop({ type: Types.ObjectId, ref: Discipline.name, required: true })
  discipline: Discipline;

  @Prop({ type: Types.ObjectId, ref: Department.name, required: true })
  department: Department;
}

export const SemesterSchema = SchemaFactory.createForClass(Semester);
