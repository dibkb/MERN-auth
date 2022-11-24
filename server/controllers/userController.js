import { usersModel } from "../model/users.model.js";
export const userInfo = async (req, res) => {
  const userID = req.params.id;
  try {
    const user = await usersModel.findById(userID);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "user dosen't exist" });
  }
};
