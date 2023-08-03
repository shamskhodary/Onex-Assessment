import User from "../models/user.js";

const checkUserByEmail = async (email) =>
  User.findOne({
    where: { email },
  });

const signupQuery = async ({ firstName, lastName, email, password }) => {
  return User.create({ firstName, lastName, email, password });
};

const signinQuery = async (email) => User.findOne({ where: { email } });

export { signupQuery, checkUserByEmail, signinQuery };
