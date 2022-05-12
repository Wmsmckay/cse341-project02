const express = require('express');
const router = express.Router();
const {
  ensureAuth,
  ensureGuest
} = require('../helpers/auth')

// router.use('/', require('./signin'));
router.use('/auth', require('./auth'));
// router.use('/dashboard', require('./dashboard'));
router.use('/users', ensureAuth, require('./users'));
router.use('/events', ensureAuth, require('./events'));

router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
      layout:'login',
  })
});


router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard', {
    // name: req.user.firstName,
  });
});



module.exports = router;