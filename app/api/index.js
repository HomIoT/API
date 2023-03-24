// ----------------------------------------------
// index.js
// ----------------------------------------------
// This file in API directory is where we initial the API instance.
// We use Axios librray to call restful APIs.
// After creating the instance, export it to use in app.

import { apiConfig } from "$config/index.js";

import axios from "axios";

const API = axios.create({
  baseURL: apiConfig.nodemcu,
});

export default API;
