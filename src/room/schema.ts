import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document {


  @Prop({ required: true })
  buildingName: string;

  @Prop({ required: true })
  floorNumber: number;

  @Prop({ required: true })
  roomNumber: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
