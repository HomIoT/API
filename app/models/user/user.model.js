import { mongodb } from "$connections/index.js";
import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
  name: {
    type: String,
    default: "",
    required: true,
  },
  password: {
    type: String,
    default: "",
    required: true,
  },
  username: {
    type: String,
    default: "",
    required: true,
    unique: true,
  },
};

const schema = new mongooseSchema(schemaModel, {
  timestamps: true,
});

export default mongodb.model("User", schema);
