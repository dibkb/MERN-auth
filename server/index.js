import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// mongoose connect
mongoose
  .connect(process.env.MONG0_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log(`Connection Succesful`))
  .catch((err) => console.log(`Error in DB connection ${err}`));

app.listen(PORT, () => {
  console.log(`Application is listening at port ${PORT}`);
});
