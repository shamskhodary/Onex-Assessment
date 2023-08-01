import express from "express";
const router = express.Router();
import authRouter from "./auth.js";
import booksRouter from "./books.js";

router.use("/auth", authRouter);
router.use("/books", booksRouter);

export default router;
