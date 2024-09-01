import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Timetable extends Document {
  @Prop({ required: true })
  department: string;

  @Prop({ required: true })
  discipline: string;

  @Prop({ required: true })
  semester: string;

  @Prop({ required: true })
  section: string;

  @Prop({ type: Types.ObjectId, ref: 'Teacher', required: true })
  teacher: Types.ObjectId;

  // You can add more fields here as needed, e.g., the timings or days
}

export const TimetableSchema = SchemaFactory.createForClass(Timetable);
