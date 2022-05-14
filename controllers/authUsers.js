const collection = 'authusers';
const { response } = require('express');
const res = require('express/lib/response');
const AuthUserModel = require('../models/authenticatedUsers');
const createError = require('http-errors');
const mongoose = require('mongoose');

const getAll = async (req, res, next) => {
  // #swagger.tags = ['Authenticated Users']

  try {
    const request = await AuthUserModel.find();
    res.json(request);
  } catch (err) {
    next(err);
  }
};

const getSingle = async (req, res, next) => {
  // #swagger.tags = ['Authenticated Users']

  try {
    const request = await AuthUserModel.findById(req.params.id);
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

const delete_user = async (req, res, next) => {
  // #swagger.tags = ['Authenticated Users']

  try {
    const request = await AuthUserModel.findByIdAndDelete({
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
  delete_user
};
