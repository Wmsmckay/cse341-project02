const Joi = require('@hapi/joi');

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required()
    // add regex for password
})

const createUserSchema = Joi.object({
    // use regex for phone number length
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    age: Joi.number().integer(),
    phone: Joi.number().integer(),
    eventsAttended: Joi.array().items(Joi.string()),
    gender: Joi.string()
})

const updateUserSchema = Joi.object({
    // use regex for phone number length
    firstName: Joi.string().empty(''),
    lastName: Joi.string().empty(''),
    email: Joi.string().email().lowercase().empty(''),
    age: Joi.number().integer().empty(''),
    phone: Joi.number().integer().empty(''),
    eventsAttended: Joi.array().items(Joi.string()).empty(''),
    gender: Joi.string().empty('')
})

module.exports = {
    authSchema,
    createUserSchema,
    updateUserSchema
}