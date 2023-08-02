import dotenv from "dotenv";
dotenv.config();

const { PORT, DB_URL, NODE_ENV } = process.env;
let connectionString = "";

if (NODE_ENV === "development") {
  connectionString = DB_URL;
}

const config = {
  port: PORT || 8080,
  nodeEnv: connectionString,
};

export default config;
