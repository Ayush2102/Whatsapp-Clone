import { ObjectId } from 'mongodb';

export interface loginInterface {
  _id: string | ObjectId;
  email: string;
  password: string;
  create_time: Date | string;
}