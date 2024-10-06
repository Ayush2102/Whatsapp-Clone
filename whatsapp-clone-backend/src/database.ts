import { MongoClient } from "mongodb";

class Database {
  static instance: MongoClient;

  static async loader() {
    const uri = "mongodb://root:hello123@127.0.0.1:27018/";

    try {
      const client = new MongoClient(uri);
      Database.instance = await client.connect();
    } catch (e) {
      console.log(e);
    }
  }
}

export default Database;


