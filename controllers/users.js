const collection = 'users';
const {
  response
} = require('express');
const res = require('express/lib/response');
const UserModel = require('../models/users');

// #swagger.tags = ['Users']


const testCreateUser = async (req, res) => {
  res.send({});
  // res.status(200);
  // res.sendStatus(200);
}

const getAll = async (req, res) => {
  try {
    const request = await UserModel.find();
    res.json(request)
  } catch (err) {
    res.json({
      message: err
    });
  };
};

const getSingle = async (req, res) => {
  try {
    // const request = await UserModel.findById({_id: req.params.userId});
    const request = await UserModel.findById(req.params.id);

    // console.log(request);
    res.json(request);
  } catch (err) {
    res.json({
      message: err
    });
  }
}

const create_user = async (req, res) => {
  const user = new UserModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    phone: req.body.phone,
    eventsAttended: req.body.eventsAttended,
    gender: req.body.gender
  });

  try {
    const request = await user.save();
    res.json(request);
  } catch (err) {
    res.json({
      message: err
    });
  }
}

const update_user = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);

    if (req.body.firstName) {
      user.firstName = req.body.firstName
    };
    if (req.body.lastName) {
      user.lastName = req.body.lastName
    };
    if (req.body.email) {
      user.email = req.body.email
    };
    if (req.body.age) {
      user.age = req.body.age
    };
    if (req.body.phone) {
      user.phone = req.body.phone
    };
    if (req.body.eventsAttended) {
      user.eventsAttended = req.body.eventsAttended
    };
    if (req.body.gender) {
      user.gender = req.body.gender
    };

    await user.save();
    res.send(user);

  } catch {
    res.status(404);
    res.send({
      error: "Contact doesn't exist."
    });
  }
};

const delete_user = async (req, res) => {
  try {
    const request = await UserModel.deleteOne({
      _id: req.params.id
    })
    res.json(request);
  } catch (err) {
    res.json({
      message: err
    });
  }
}


module.exports = {
  getAll,
  getSingle,
  create_user,
  delete_user,
  update_user,
  testCreateUser
}