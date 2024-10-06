import Database from "../database";
// import { loginInterface } from "../Interfaces/login";

class MessageDatabase {
  static async sendMsg(query: object){
    const cursor = Database.instance.db("chat").collection("chat_rec");
    const result = await cursor.insertOne(query);
    console.log(result);
    return result;
  }

  static async getMsg<T>(query: {filter: object }){
    const cursor = Database.instance.db("chat").collection("chat_rec");
    const result = await cursor.find(query.filter).sort('create_time').toArray() as unknown as T[];
    return result;
  }
}

export default MessageDatabase;
