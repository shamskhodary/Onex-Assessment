import dotenv from "dotenv";
dotenv.config();

const { PORT } = process.env;

const config = {
  port: PORT || 8080,
};

export default config;
