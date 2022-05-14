const collection = 'users';
const { response } = require('express');
const res = require('express/lib/response');
const UserModel = require('../models/users');
const createError = require('http-errors');
const mongoose = require('mongoose');
const { createUserSchema, updateUserSchema } = require('../helpers/validation_schema');

const getAll = async (req, res, next) => {
  // #swagger.tags = ['Users']

  try {
    const request = await UserModel.find();
    res.json(request);
  } catch (err) {
    next(err);
  }
};

const getSingle = async (req, res, next) => {
  // #swagger.tags = ['Users']

  try {
    const request = await UserModel.findById(req.params.id);
    if (!request) {
      throw createError(404, "User doesn't exist");
    }
    res.json(request);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      next(createError(400, 'Invalid User id'));
      return;
    }
    next(err);
  }
};

const create_user = async (req, res, next) => {
  // #swagger.tags = ['Users']

  try {
    const result = await createUserSchema.validateAsync(req.body);
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.age ||
    !req.body.phone ||
    !req.body.eventsAttended ||
    !req.body.gender

    const user = new UserModel(result);
    const request = await user.save();
    res.json(request);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createError(422, err.message));
    }
    next(err);
  }
};

const update_user = async (req, res, next) => {
  // #swagger.tags = ['Users']

  try {
    const user = await UserModel.findById(req.params.id);

    if (!user) {
      throw createError(404, "User doesn't exist");
    }

    const result = await updateUserSchema.validateAsync(req.body);

    if (req.body.firstName) {
      user.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      user.lastName = req.body.lastName;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.age) {
      user.age = req.body.age;
    }
    if (req.body.phone) {
      user.phone = req.body.phone;
    }
    if (req.body.eventsAttended) {
      user.eventsAttended = req.body.eventsAttended;
    }
    if (req.body.gender) {
      user.gender = req.body.gender;
    }

    await user.save();
    res.send(user);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid User id'));
    }
    next(err);
  }
};

const delete_user = async (req, res, next) => {
  // #swagger.tags = ['Users']

  try {
    const request = await UserModel.findByIdAndDelete({
      _id: req.params.id
    });
    if (!request) {
      throw createError(404, "User doesn't exist");
    }
    res.json(request);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      next(createError(400, 'Invalid User id'));
      return;
    }
    next(err);
  }
};

module.exports = {
  getAll,
  getSingle,
  create_user,
  delete_user,
  update_user
  // testCreateUser
};
