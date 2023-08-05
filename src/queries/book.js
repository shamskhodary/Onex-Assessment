import { Op } from "sequelize";
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

const searchBookQuery = (searchQuery) =>
  Book.findAll({
    where: {
      [Op.or]: {
        title: {
          //% => to search for any matching result
          [Op.iLike]: `%${searchQuery}%`,
        },
        author: {
          [Op.iLike]: `%${searchQuery}%`,
        },
      },
    },
  });

export {
  allBooksQuery,
  createBookQuery,
  editBookQuery,
  deleteBookQuery,
  searchBookQuery,
};
