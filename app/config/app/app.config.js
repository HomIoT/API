import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  environment: env.APP_ENVIRONMENT,
  port: env.APP_PORT,
  secret: env.APP_SECRET,
};
