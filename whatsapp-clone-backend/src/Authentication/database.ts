import Database from "../database";
// import { loginInterface } from "../Interfaces/login";

class AuthDatabase {
  static async login<T>(query: { collection: string; filter: object }){
    const cursor = Database.instance.db("chat").collection(query.collection);
    const result = await cursor.find(query.filter).toArray() as unknown as T[];
    // console.log(result);
    if(result != null){
      return result[0]
    }
    return result;
  }
}

export default AuthDatabase;
