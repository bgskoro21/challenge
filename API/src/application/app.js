import express from "express";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { publicRoutes } from "../routes/public-api.js";

export const app = express();

app.use(express.json());
app.use(publicRoutes);
app.use(errorMiddleware);
