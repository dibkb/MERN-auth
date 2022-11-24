import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { usersModel } from "../model/users.model.js";
dotenv.config();
export const loginView = async (req, res) => {
  const { email, password } = req.body;
  // Check if user is already in DB
  const user = await usersModel.findOne({ email });
  if (user)
    bcrypt.compare(password, user.password).then((response) => {
      if (response) {
        const token = jwt.sign(
          { name: user.name, email: user.email },
          process.env.JWT_KEY,
          {
            expiresIn: "3 days",
          }
        );
        res.status(200).json({ token: token, userId: user._id });
      } else {
        res
          .status(400)
          .json({ status: "fail", message: "Wrong password bruh" });
      }
    });
  else {
    res
      .status(400)
      .json({ status: "fail", message: "Email does not exists bruh" });
  }
};
