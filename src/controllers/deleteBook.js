import { deleteBookQuery } from "../queries/book.js";

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    await deleteBookQuery(id);

    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export default deleteBook;
