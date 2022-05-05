const express = require('express');

const usersController = require('../controllers/users');
const router = express.Router();

// router.get('/', usersController.getAll);
// router.get('/:id', usersController.getSingle);
// router.post('/', usersController.createUser);
router.get('/', usersController.testCreateUser);
router.post('/', usersController.testCreateUser);

module.exports = router;