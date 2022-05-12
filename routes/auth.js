const express = require('express');
// const authController = require('../controllers/auth');
const router = express.Router();
const passport = require('passport');

// router.get('/google', authController.authenticate);
// router.get('/google/callback', authController.authenticateCallback);
// router.get('/:id', authController.);


router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});



module.exports = router;
