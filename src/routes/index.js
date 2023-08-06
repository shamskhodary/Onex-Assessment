import express from "express";
const router = express.Router();
import authRouter from "./auth.js";
import booksRouter from "./books.js";

router.use("/auth", authRouter);
router.use("/books", booksRouter);
router.get("/hello", (req, res) => res.json("hellloooo"));

export default router;
