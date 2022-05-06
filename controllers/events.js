const collection = 'events';
const { response } = require('express');
const res = require('express/lib/response');
const EventsModel = require('../models/events');
const createError = require('http-errors');
const mongoose = require('mongoose');
const { createEventSchema, updateEventSchema } = require('../helpers/validation_schema');

// #swagger.tags = ['Events']

const getAll = async (req, res, next) => {
  // #swagger.tags = ['Events']

  try {
    const request = await EventsModel.find();
    res.json(request);
  } catch (err) {
    // res.json({
    //   message: err
    // });
    next(err);
  }
};

const getSingle = async (req, res, next) => {
  // #swagger.tags = ['Events']

  try {
    const request = await EventsModel.findById(req.params.id);
    if (!request) {
      throw createError(404, "Event doesn't exist");
    }
    res.json(request);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      next(createError(400, 'Invalid Event id'));
      return;
    }
    next(err);
  }
};

const create_event = async (req, res, next) => {
  // #swagger.tags = ['Events']

  try {
    const result = await createEventSchema.validateAsync(req.body);
    const event = new EventsModel(result);
    const request = await event.save();
    res.json(request);
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(createError(422, err.message));
    }
    next(err);
  }
};

const update_event = async (req, res, next) => {
  // #swagger.tags = ['Events']

  try {
    const event = await EventModel.findById(req.params.id);

    if (!event) {
      throw createError(404, "Event doesn't exist");
    }

    const result = await updateEventSchema.validateAsync(req.body);

    if (req.body.eventName) {
      event.eventName = req.body.eventName;
    }
    if (req.body.participants) {
      event.participants = req.body.participants;
    }
    if (req.body.location) {
      event.location = req.body.location;
    }
    if (req.body.description) {
      event.description = req.body.description;
    }
    if (req.body.host) {
      event.host = req.body.host;
    }

    await event.save();
    res.send(event);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return next(createError(400, 'Invalid Event id'));
    }
    next(err);
  }
};

const delete_event = async (req, res, next) => {
  // #swagger.tags = ['Events']

  try {
    const request = await EventModel.findByIdAndDelete({
      _id: req.params.id
    });
    if (!request) {
      throw createError(404, "Event doesn't exist");
    }
    res.json(request);
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      next(createError(400, 'Invalid Event id'));
      return;
    }
    next(err);
  }
};

module.exports = {
  getAll,
  getSingle,
  create_event,
  delete_event,
  update_event
};
