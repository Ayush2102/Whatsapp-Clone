import express from 'express';
import AuthController from './controller';

const AuthRouter = express.Router();

AuthRouter.post(
  '/login',
  async (request: express.Request, response: express.Response) =>
  AuthController.login(request, response)
);

export default AuthRouter;
