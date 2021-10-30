const Joi = require("joi");

const id = Joi
  .string()
  .uuid();

const name = Joi
  .string()
  .alphanum()
  .min(3)
  .max(25);

const price = Joi
  .number()
  .integer()
  .min(15)
  .max(25);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  getProductSchema,
  createProductSchema,
  updateProductSchema
};
