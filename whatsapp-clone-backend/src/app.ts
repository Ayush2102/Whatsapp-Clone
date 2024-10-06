import express, { Express } from "express";
import cors from 'cors';
import Database from "./database";
import AuthRouter from "./Authentication/routes";
import MessageRouter from "./Message/routes";

const app = express();

async function main() {
  await Database.loader();
  console.log("Database Connected.");
}

main();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));

app.use("/api/auth", AuthRouter);
app.use("/api/msg", MessageRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
