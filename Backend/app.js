import express from "express";
import { config } from "dotenv";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
config({ path: "./config/config.env" });

export default app;
