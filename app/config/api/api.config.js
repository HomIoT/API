// ----------------------------------------------
// api.js
// ----------------------------------------------
// Configuration data for API.
// It this file, we just take values for API and export them.
// In this case, we only have baseUrl. Sometimes, you have apiKey, JWT or anything else.

import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  nodemcu: env.NODEMCU_URL,
};
