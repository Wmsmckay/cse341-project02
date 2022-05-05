// const { response } = require('express');
// const mongodb = require('../db/connect');
// const mongodb = require('../db/mongoDb.js');
// const ObjectId = require('mongodb').ObjectId;
const collection = 'users';
const users = require('../models/users');

// const database = mongodb.getDb().db().collection(collection)




const testCreateUser = async (req,res) => {
  res.send({});
  // res.status(200);
  // res.sendStatus(200);
}



// const getAll = async (req, res) => {
//   const result = await mongodb.getDb().db().collection(collection).find();
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists);
//   });
// };

const getAll = async (req, res) => {
  try{
      const contacts = await users.find();
      res.json(contacts)
  } catch(err){
      res.json({message:err});
  };
};




// const getSingle = async (req, res) => {
//   const userId = new ObjectId(req.params.id);
//   const result = await mongodb.getDb().db().collection(collection).find({
//     _id: userId
//   });
//   result.toArray().then((lists) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.status(200).json(lists[0]);
//   });
// };

// const createUser = async (req, res) => {
//   const newUser = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     age: req.body.age,
//     email: req.body.email,
//     phone: req.body.phone,
//     eventsAttended: req.body.eventsAttended,
//     gender: req.body.gender
//   };
//   const response = await mongodb.getDb().db().collection(collection).insertOne(newUser);
//   if (response.acknowledged) {
//     res.status(201).json(response);
//   } else {
//     res.status(500).json(response.error || 'Error occurred while creating user.');
//   }
// };




module.exports = {
  getAll,
  // getSingle,
  // createUser,
  testCreateUser
}