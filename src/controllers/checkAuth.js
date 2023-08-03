import verifyToken from "../helpers/verifyToken.js";
import { getUserById } from "../queries/auth.js";
//users/me
const checkAuth = async (req, res) => {
  const { token } = req.cookies;

  try {
    if (token) {
      const payload = await verifyToken(token);
      const { id } = payload;

      const { firstName, lastName, email } = await getUserById(id);
      res.json({ user: { id, firstName, lastName, email } });
    } else {
      res.json({ user: null });
    }
  } catch (error) {
    next(error);
  }
};

export default checkAuth;
