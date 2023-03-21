import { System } from "$models/index.js";

export const ALL = async (req, res) => {
  try {
    const systems = await System.find();

    res.status(200).send(systems);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const NEW = async (req, res) => {
  const data = req.body;

  try {
    const system = await System.create(data);

    res.status(200).send(system);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const SINGLE = async (req, res) => {
  const { id } = req.params;

  try {
    const system = await System.findById(id);

    if (system === null) {
      return res.status(404).send({ message: "System not found" });
    }

    res.status(200).send(system);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const UPDATE = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const system = await System.findByIdAndUpdate(id, data);

    if (system === null) {
      return res.status(404).send({ message: "System not found" });
    }

    res.status(200).send({ message: "System updated" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
