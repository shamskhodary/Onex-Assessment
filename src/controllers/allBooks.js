import { allBooksQuery, searchBookQuery } from "../queries/book.js";

const allBooks = async (req, res, next) => {
  try {
    const query = req.query?.q;

    const { id } = req.user;
    if (query) {
      const data = await searchBookQuery(query, id);
      res.json(data);
    }
    const data = await allBooksQuery(id);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default allBooks;
