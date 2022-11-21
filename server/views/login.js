import express from "express";
import { loginView } from "../controllers/loginController.js";
export const routerLogin = express.Router();
routerLogin.post("/", loginView);
