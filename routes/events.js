const express = require('express');
const eventsController = require('../controllers/events');
const router = express.Router();

router.get('/', eventsController.getAll);
router.get('/:id', eventsController.getSingle);
router.post('/', eventsController.create_event);
router.put('/:id', eventsController.update_event);
router.delete('/:id', eventsController.delete_event);

module.exports = router;
