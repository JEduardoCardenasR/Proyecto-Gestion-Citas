import express from "express";
import indexRouter from "./routes/indexRouter";
import cors from "cors";

const server = express();

//Middleware de express
server.use(express.json());
server.use(cors());
server.use(indexRouter);

export default server;
