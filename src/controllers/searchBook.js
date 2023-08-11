import { searchBookQuery } from "../queries/book.js";

const searchBook = async (req, res, next) => {
  try {
    const { q } = req.query;
    const { id } = req.user;

    const data = await searchBookQuery(q, id);

    res.json(data);
  } catch (error) {
    next(error);
  }
};

export default searchBook;
