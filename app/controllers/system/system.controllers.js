import { System } from "$models/index.js";
import API from "$api/index.js";

export const ALL = async (req, res) => {
  try {
    const systems = await System.find().sort({ name: 1 });

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
    const system = await System.findById(id);

    if (system === null) {
      return res.status(404).send({ message: "System not found" });
    }

    try {
      await API.get("/act", {
        params: {
          digital: String(system.digital),
          state: String(Number(data.state)),
        },
      });

      try {
        const system = await System.findByIdAndUpdate(id, data);

        if (system === null) {
          return res.status(404).send({ message: "System not found" });
        }

        res.status(200).send({ message: "System updated" });
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.params;

  try {
    const system = await System.findByIdAndDelete(id);

    if (system === null) {
      return res.status(404).send({ message: "System not found" });
    }

    res.status(200).send({ message: "System deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
