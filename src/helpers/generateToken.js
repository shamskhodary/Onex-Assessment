import jwt from "jsonwebtoken";
const { SECRET_KEY } = process.env;

const generateToken = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });

export default generateToken;
