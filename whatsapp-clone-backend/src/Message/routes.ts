import express from 'express';
import AuthController from './controller';

const MessageRouter = express.Router();

MessageRouter.post(
  '/send',
  async (request: express.Request, response: express.Response) =>
  AuthController.sendMsg(request, response)
);

MessageRouter.post(
  '/',
  async (request: express.Request, response: express.Response) =>
  AuthController.getMsg(request, response)
);

MessageRouter.get(
  '/pdf',
  async (request: express.Request, response: express.Response) =>
  AuthController.getPdf(request, response)
);

export default MessageRouter;
