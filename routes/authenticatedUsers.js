const express = require('express');
const authUsersController = require('../controllers/authUsers');
const router = express.Router();

router.get('/', authUsersController.getAll);
router.get('/:id', authUsersController.getSingle);
router.delete('/:id', authUsersController.delete_user);

module.exports = router;