const Joi = require('joi');

const listingSchema = Joi.object({
  title: Joi.string().required().messages({
    'string.base': 'Title must be a string',
    'string.empty': 'Title cannot be empty',
    'any.required': 'Title is required'
  }),
  description: Joi.string().required().messages({
    'string.base': 'Description must be a string',
    'string.empty': 'Description cannot be empty',
    'any.required': 'Description is required'
  }),
  price: Joi.number().positive().required().messages({
    'number.base': 'Price must be a number',
    'number.positive': 'Price must be a positive number',
    'any.required': 'Price is required'
  }),
  location: Joi.string().required().messages({
    'string.base': 'Location must be a string',
    'string.empty': 'Location cannot be empty',
    'any.required': 'Location is required'
  }),
  country: Joi.string().required().messages({
    'string.base': 'Country must be a string',
    'string.empty': 'Country cannot be empty',
    'any.required': 'Country is required'
  }),
  image: Joi.string().uri().allow('', null).messages({
    'string.base': 'Image must be a string',
    'string.empty': 'Image cannot be empty',
    'string.uri': 'Image must be a valid URL',
    'any.required': 'Image URL is required'
  })
}).required();

module.exports = listingSchema;
