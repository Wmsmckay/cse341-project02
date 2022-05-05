const express = require('express');

const eventsController = require('../controllers/users');
const router = express.Router();

router.get('/', eventsController.getAll);
router.get('/:id', eventsController.getSingle);
router.post('/', eventsController.createUser);


module.exports = router;
