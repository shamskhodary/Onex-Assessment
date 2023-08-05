import express from "express";
import authenticated from "../helpers/authenticated.js";
import allBooks from "../controllers/allBooks.js";
import createBook from "../controllers/createBook.js";
import editBook from "../controllers/editBook.js";
import deleteBook from "../controllers/deleteBook.js";
import searchBook from "../controllers/searchBook.js";

const router = express.Router();

router.get("/", authenticated, allBooks);
router.post("/", authenticated, createBook);
router.get("/search", authenticated, searchBook);
router.put("/:id", authenticated, editBook);
router.delete("/:id", authenticated, deleteBook);

export default router;
