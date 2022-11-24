import express from "express";
import { userInfo } from "../controllers/userController.js";
export const routerUser = express.Router();
routerUser.get("/:id", userInfo);
