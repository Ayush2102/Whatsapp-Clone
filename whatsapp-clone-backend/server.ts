import express, { Express } from "express";
import http from "http";
import Database from "./database";
import AuthRouter from "./Authentication/routes";

const Server = async (): Promise<{ app: Express; server: http.Server }> => {
  const app = express();

  const server = http.createServer(app);
  await Database.loader();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use('/api/auth/', AuthRouter);

  const PORT = 5000;
  app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
  });

  return { app, server };
};

export default Server;
