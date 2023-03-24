import { User } from "$models/index.js";

export const REGISTER = async (req, res) => {
  const data = req.body;

  try {
    const user = await User.create(data);

    res.status(200).send({ message: "User created", token: user._id, user });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const LOGIN = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user === null) {
      res.status(404).send({ message: "User not found" });
    }

    if (!password === user.password) {
      res.status(401).send({ message: "Wrong password" });
    }

    res.status(200).send({ token: user._id });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
