import CustomError from "./CustomError.js";
import verifyToken from "./verifyToken.js";

const authenticated = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    if (token) {
      const payload = await verifyToken(token);
      req.user = payload;
      next();
    } else throw new Error();
  } catch (error) {
    next(new CustomError(401, "Unauthorized"));
  }
};

export default authenticated;
