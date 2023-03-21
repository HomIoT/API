import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  mongodb: {
    cloud: env.MONGO_CLOUD,
    host: env.MONGODB_HOST,
    port: env.MONGODB_PORT,
    collection: env.MONGODB_COLLECTION,
  },
};
