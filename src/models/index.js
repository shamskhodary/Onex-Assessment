import Book from "./book.js";
import User from "./user.js";

User.hasMany(Book, { onDelete: "CASCADE" });
Book.belongsTo(User);

export { User, Book };
