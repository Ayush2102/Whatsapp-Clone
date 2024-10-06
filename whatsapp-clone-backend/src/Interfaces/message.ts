import { ObjectId } from "mongodb";

export interface messageInterface {
  _id: string | ObjectId;
  sender_id: string | ObjectId;
  receiver_id: string | ObjectId;
  msg: string;
  create_time: Date | string;
}
