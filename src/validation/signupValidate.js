import joi from "joi";

const signupValidate = async (data) => {
  const schema = joi.object({
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });
  return schema.validateAsync(data);
};

export default signupValidate;
