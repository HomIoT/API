import { mongodb } from "$connections/index.js";
import mongoose from "mongoose";

const mongooseSchema = mongoose.Schema;

const schemaModel = {
  name: {
    type: String,
    default: "",
    required: true,
  },
  digital: {
    type: Number,
    default: 0,
  },
  state: {
    type: Boolean,
    default: false,
  },
};

const schema = new mongooseSchema(schemaModel, {
  timestamps: true,
});

export default mongodb.model("System", schema);
