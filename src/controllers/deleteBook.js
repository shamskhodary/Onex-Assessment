import { deleteBookQuery } from "../queries/book.js";

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await deleteBookQuery(id);
    console.log(deleted);
    res.json({ message: "" });
  } catch (error) {
    next(error);
  }
};

export default deleteBook;
