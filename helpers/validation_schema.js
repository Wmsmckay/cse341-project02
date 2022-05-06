const Joi = require('@hapi/joi');

const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required()
    // add regex for password
})

const userSchema = Joi.object({
    // use regex for phone number length
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    age: Joi.number().integer(),
    phone: Joi.number().integer(),
    eventsAttended: Joi.array().items(Joi.string()),
    gender: Joi.string()
})

module.exports = {
    authSchema,
    userSchema
}