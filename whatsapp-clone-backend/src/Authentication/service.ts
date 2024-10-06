import AuthDatabase from "./database";
import { loginInterface } from "../Interfaces/login";

class AuthService {
  static async login(data: { email: string; password: string }) {
    const { email, password } = data;
    const user: loginInterface = await AuthDatabase.login({
      collection: "friend_rec",
      filter: {
        email: email
      },
    });

    const pwd = user.password;
    if (pwd == password) {
      return user;
    }
    return false;
  }
}

export default AuthService;
