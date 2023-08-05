import { editBookQuery } from "../queries/book.js";

const editBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, description, imageUrl, pages } = req.body;

    const data = await editBookQuery(
      { title, author, description, imageUrl, pages },
      id
    );
    console.log(data);
  } catch (error) {
    next(error);
  }
};

export default editBook;
