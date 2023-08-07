import bcrypt from "bcrypt";
import { checkUserByEmail, signupQuery } from "../queries/auth.js";
import validate from "../validation/signupValidate.js";
import CustomError from "../helpers/CustomError.js";
import generateToken from "../helpers/generateToken.js";

const signup = async (req, res, next) => {
  try {
    await validate(req.body);

    const isExisted = await checkUserByEmail(req.body.email);

    if (isExisted) throw new CustomError(400, "This email already exists");

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = await signupQuery({
      ...req.body,
      password: hashedPassword,
    });

    const token = await generateToken({ id: newUser.id, email: newUser.email });

    res
      .cookie("token", token)
      .status(201)
      .json({
        message: "Your account created successfully",
        user: { ...newUser.dataValues, password: "*******" },
      });
  } catch (error) {
    if (error.name === "ValidationError") {
      res.json({ status: "err", message: error.details[0].message });
    } else {
      res.json({ status: "err", message: error.message });
    }
  }
};

export default signup;
