import { allBooksQuery } from "../queries/book.js";

const allBooks = async (req, res, next) => {
  try {
    const { id } = req.user;
    const data = await allBooksQuery(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default allBooks;
