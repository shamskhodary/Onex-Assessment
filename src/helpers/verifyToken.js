import jwt from "jsonwebtoken";

const { SECRET_KEY } = process.env;

const verifyToken = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decode) => {
      if (err) reject(err);
      resolve(decode);
    });
  });
};

export default verifyToken;
