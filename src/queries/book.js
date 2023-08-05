import { Book } from "../models/index.js";

const allBooksQuery = (userId) =>
  Book.findAll({
    where: {
      userId,
    },
  });

const createBookQuery = ({
  title,
  author,
  description,
  userId,
  imageUrl,
  pages,
}) => Book.create({ title, author, description, userId, imageUrl, pages });

const editBookQuery = ({ title, author, description, imageUrl, pages, id }) =>
  Book.update(
    { title, author, description, imageUrl, pages },
    { where: { id }, returning: true }
  );

const deleteBookQuery = (id) => Book.destroy({ where: { id } });

export { allBooksQuery, createBookQuery, editBookQuery, deleteBookQuery };
