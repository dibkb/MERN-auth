import bcrypt from "bcryptjs";
import { usersModel } from "../model/users.model.js";
export const registerView = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 3);
  // Check if user is already in DB
  usersModel.findOne({ email: email }).then((user) => {
    if (user) {
      // return 400 if exists
      res.status(400).json(`Email${email} already in use`);
    } else {
      // Register User
      const newUser = usersModel({
        name: name,
        email: email,
        password: hashedPassword,
      });
      newUser
        .save()
        .then((user) => {
          res.status(200).json(user);
        })
        .catch((error) => {
          res.status(400).json(error);
        });
    }
  });
};
