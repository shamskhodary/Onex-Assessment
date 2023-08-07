import bcrypt from "bcrypt";
import CustomError from "../helpers/CustomError.js";
import { signinQuery } from "../queries/auth.js";
import validate from "../validation/signinValidate.js";
import generateToken from "../helpers/generateToken.js";

const signin = async (req, res, next) => {
  try {
    await validate(req.body);

    const user = await signinQuery(req.body.email);

    if (!user) throw new CustomError(401, "You entered a wrong email");

    const compare = await bcrypt.compare(req.body.password, user.password);
    if (!compare) throw new CustomError(401, "You entered a wrong password");

    const token = await generateToken({ id: user.id, email: user.email });

    res
      .cookie("token", token)
      .status(200)
      .json({ message: "You are logged in" });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.json({ status: "err", message: error.details[0].message });
    } else {
      res.json({ status: "err", message: error.message });
    }
  }
};

export default signin;
