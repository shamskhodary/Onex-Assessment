import joi from "joi";

const signinValidate = async (data) => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });
  return schema.validateAsync(data);
};

export default signinValidate;
