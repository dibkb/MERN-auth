import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv/config";
import { routerRegister } from "./views/register.js";
import { routerLogin } from "./views/login.js";
import { routerUser } from "./views/user.js";
const app = express();
const PORT = process.env.PORT;
// middleware
// cors
app.use(cors());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded({ extended: true }));
// mongoose connect
mongoose
  .connect(process.env.MONG0_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`MongoDB Connection Succesfull`))
  .catch((err) => console.log(`Error in DB connection ${err}`));
// ---------------------------routers-------------------------------------------
// register
app.use("/api/register", routerRegister);
// login
app.use("/api/login", routerLogin);
// user
app.use("/api/user", routerUser);
app.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
