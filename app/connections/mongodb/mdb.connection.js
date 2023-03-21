import mongoose from "mongoose";

import { appConfig } from "$config/index.js";
import { databaseConfig } from "$config/index.js";

const { mongodb } = databaseConfig;

const url =
  appConfig.environment === "development"
    ? `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.collection}`
    : mongodb.cloud;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
