import cors from "cors";
import { config } from "dotenv";
config();

import express from "express";
import router from "./routes";

const buildServer = () => {
  const server = express();
  server.use(express.json());

  server.use(
    cors({
      origin: ["http://localhost:3001"],
    })
  );

  server.get("/", (req, res) => {
    res.status(200).json({
      message: "Hello Express",
    });
  });

  server.use(`/api/v1`, router);

  return server;
};

export default buildServer;
