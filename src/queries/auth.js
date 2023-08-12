import { User } from "../models/index.js";

const checkUserByEmail = (email) =>
  User.findOne({
    where: { email },
  });


const signupQuery = ({ firstName, lastName, email, password }) =>
  User.create({ firstName, lastName, email, password });

const signinQuery = (email) => User.findOne({ where: { email } });

export { signupQuery, checkUserByEmail, signinQuery };
