import bcrypt from "bcrypt";
import { usersModel } from "../model/users.model.js";
export const registerView = async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user is already in DB
  console.log(req.body);
  const user = await usersModel.findOne({ email });
  if (!user) {
    bcrypt
      .hash(password, 6)
      .then((result) => {
        const newUser = usersModel({
          name: name,
          email: email,
          password: result,
        });
        return newUser.save();
      })
      .then((user) => {
        if (user) {
          res.status(200).json({ status: "ok", user: user });
        }
      });
  } else {
    res.status(400).json({ status: "fail", message: "email is taken" });
  }
};
