import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Department extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  headOfDepartment: string;

  @Prop({ default: '' })
  description?: string;

  @Prop({ default: '' })
  email?: string;

  @Prop({ default: '' })
  phoneNumber?: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
