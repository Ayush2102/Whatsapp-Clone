import MessageDatabase from "./database";
import { messageInterface } from "../Interfaces/message";
import { ObjectId } from "mongodb";

class MessageService {
  static async sendMsg(data: {
    msg: string;
    sender_id: string | ObjectId;
    receiver_id: string | ObjectId;
  }) {
    const { msg, sender_id, receiver_id } = data;
    const result = await MessageDatabase.sendMsg({
      sender_id: new ObjectId(sender_id),
      receiver_id: new ObjectId(receiver_id),
      msg,
      create_time: new Date(),
    });

    return result;
  }

  static async getMsg(data: {
    sender_id: string | ObjectId;
    receiver_id: string | ObjectId;
  }) {
    const { sender_id, receiver_id } = data;
    const result: messageInterface[] = await MessageDatabase.getMsg({
      filter: {
        $or: [
          {
            $and: [
              {sender_id: new ObjectId(sender_id)},
              {receiver_id: new ObjectId(receiver_id)}
            ]
          },
          {
            $and: [
              {sender_id: new ObjectId(receiver_id)},
              {receiver_id: new ObjectId(sender_id)}
            ]
          }
        ]
      },
    });

    return result;
  }
}

export default MessageService;
