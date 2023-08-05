import joi from "joi";

const addBookValidate = async (data) => {
  const schema = joi.object({
    title: joi.string().required(),
    author: joi.string().required(),
    description: joi.string().required(),
    imageUrl: joi.string(),
    pages: joi.number().required(),
  });
  return schema.validateAsync(data);
};

export default addBookValidate;
