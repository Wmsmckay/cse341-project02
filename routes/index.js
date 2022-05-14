const express = require('express');
const router = express.Router();
const {
  ensureAuth,
  ensureGuest
} = require('../helpers/auth')


router.get('/', ensureGuest, (req, res) => {
  // #swagger.ignore = true
  res.render('login', {
    layout: 'login',
  })
});

router.get('/dashboard', ensureAuth, (req, res) => {
  // #swagger.ignore = true
  res.render('dashboard', {});
});

router.use('/auth', require('./auth'));
router.use('/users', ensureAuth, require('./users'));
router.use('/events', ensureAuth, require('./events'));
router.use('/authenticatedUsers', ensureAuth, require('./authenticatedUsers'));
router.use('/api-docs', ensureAuth, require('./swagger'));

module.exports = router;