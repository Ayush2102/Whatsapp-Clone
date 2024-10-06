import express from "express";
import AuthService from "./service";


class AuthController {
  static async login(request: express.Request, response: express.Response) {
    // console.log("hello", request.body);
    const result = await AuthService.login(request.body);

    if (result) {
      const payload = {
        status: true,
        data: result
      };
      return response.status(200).json(payload);
    }

    return response.status(200).json({ status: false });
  }

}

export default AuthController;