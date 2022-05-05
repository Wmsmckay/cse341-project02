// const { response } = require('express');
const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const collection = 'events';
const database = mongodb.getDb().db().collection(collection)

const getAll = async (req, res) => {
  // database = mongodb.getDb().db().collection(collection)
  const result = await database.find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await database.find({
    _id: userId
  });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const createEvent = async (req, res) => {
  const newEvent = {
    eventName: req.body.eventName,
    participants: req.body.participants,
    location: req.body.participants,
    description: req.body.description,
    host: req.body.host
  };
  const response = await database.insertOne(newEvent);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Error occurred while creating event.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createEvent
}