const Joi = require('@hapi/joi');

const authSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required()
  // add regex for password
});

const createUserSchema = Joi.object({
  // use regex for phone number length
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().lowercase().required(),
  age: Joi.number().integer(),
  phone: Joi.number().integer(),
  eventsAttended: Joi.array().items(Joi.string()),
  gender: Joi.string()
});

const updateUserSchema = Joi.object({
  // use regex for phone number length
  firstName: Joi.string().empty(''),
  lastName: Joi.string().empty(''),
  email: Joi.string().email().lowercase().empty(''),
  age: Joi.number().integer().empty(''),
  phone: Joi.number().integer().empty(''),
  eventsAttended: Joi.array().items(Joi.string()).empty(''),
  gender: Joi.string().empty('')
});

const createEventSchema = Joi.object({
  eventName: Joi.string().required(),
  participants: Joi.array().items(Joi.string()).required(),
  location: Joi.string().max(100).required(),
  description: Joi.string().max(200).required(),
  host: Joi.string().required()
});

const updateEventSchema = Joi.object({
  eventName: Joi.string().empty(''),
  participants: Joi.array().items(Joi.string()).empty(''),
  location: Joi.string().max(100).empty(''),
  description: Joi.string().max(200).empty(''),
  host: Joi.string().empty('')
});

module.exports = {
  authSchema,
  createUserSchema,
  updateUserSchema,
  createEventSchema,
  updateEventSchema
};
