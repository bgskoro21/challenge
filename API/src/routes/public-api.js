import express from "express";
import userController from "../controller/user-controller.js";

export const publicRoutes = new express.Router();

publicRoutes.post("/api/user/register", userController.create);
publicRoutes.post("/api/user/login", userController.login);
