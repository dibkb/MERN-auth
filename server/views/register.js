import express from "express";
import { registerView } from "../controllers/registerController.js";
export const routerRegister = express.Router();
routerRegister.post("/", registerView);
