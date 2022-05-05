const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
// router.use('/users/:id', require('./users'));

router.use('/events', require('./events'));
// router.use('/events/:id', require('./events'));

module.exports = router;
