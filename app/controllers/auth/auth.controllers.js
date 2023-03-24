import { User } from "$models/index.js";
import { createToken } from "$functions/index.js";

import md5 from "md5";

export const REGISTER = async (req, res) => {
  const data = req.body;

  data.password = md5(data.password);

  try {
    const user = await User.create(data);

    res
      .status(200)
      .send({ message: "User created", token: createToken(user._id), user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const LOGIN = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user === null) {
      return res.status(404).send({ message: "User not found" });
    }

    if (md5(password) !== user.password) {
      return res.status(401).send({ message: "Wrong password" });
    }

    return res.status(200).send({ token: createToken(user._id) });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
