import dotenv from "dotenv";
dotenv.config();

const env = process.env;

export default {
  filePath: env.FILE_PATH,
  fileName: env.FILE_NAME,
};
