import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as dotenv from "dotenv";
import { routerRegister } from "./views/register.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose connect
mongoose
  .connect(process.env.MONG0_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`MongoDB Connection Succesfull`))
  .catch((err) => console.log(`Error in DB connection ${err}`));
// routers
app.use("/api/register", routerRegister);
app.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
