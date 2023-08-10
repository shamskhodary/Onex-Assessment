import CustomError from "./CustomError.js";
import verifyToken from "./verifyToken.js";

const authenticated = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    throw new CustomError(401, "unauthorized");
  }

  const payload = await verifyToken(token);
  req.user = payload;
  next();
};

export default authenticated;
