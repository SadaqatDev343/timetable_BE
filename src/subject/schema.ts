import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subject extends Document {
  @Prop({ required: true, unique: true })
  courseCode: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  credits: number;

}

export const SubjectSchema = SchemaFactory.createForClass(Subject);
