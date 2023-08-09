import { createBookQuery } from "../queries/book.js";
import validate from "../validation/addBookValidate.js";

const createBook = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { title, author, description, imageUrl, pages } = req.body;

    await validate(req.body);

    const data = await createBookQuery({
      title,
      author,
      description,
      userId: id,
      imageUrl,
      pages,
    });
    res.json({ message: "Book created successfully", data });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.json({ status: "err", message: error.details[0].message });
    } else {
      res.json({ status: "err", message: error.message });
    }
  }
};

export default createBook;
