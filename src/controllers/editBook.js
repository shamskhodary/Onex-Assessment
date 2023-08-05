import { editBookQuery } from "../queries/book.js";
import validate from "../validation/addBookValidate.js";
const editBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, author, description, imageUrl, pages } = req.body;

    await validate({ title, author, description, imageUrl, pages });

    const [data, updated] = await editBookQuery({
      title,
      author,
      description,
      imageUrl,
      pages,
      id,
    });
    res.json({ message: "Book updated successfully", data: updated });
  } catch (error) {
    next(error);
  }
};

export default editBook;
