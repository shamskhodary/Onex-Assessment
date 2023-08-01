import express from "express";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";

const app = express();

app.use([
  express.json(),
  express.urlencoded({ extended: true }),
  cookieParser(),
]);

app.use("/api/v1", router);

export default app;
