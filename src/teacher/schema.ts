import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Teacher extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;
    
  @Prop({ required: true })
  subjectTaught: string;

  @Prop({ required: true })
  designation: string;
  @Prop({ required: false }) // Optional field
  userId: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
