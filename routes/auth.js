const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get(
  // #swagger.ignore = true
  '/google', passport.authenticate('google', {
    scope: ['profile']
  }));

router.get(
  // #swagger.ignore = true
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/'
  }),
  (req, res) => {
    res.redirect('/dashboard');
  }
);

router.get('/logout', (req, res) => {
  // #swagger.ignore = true
  req.logout();
  res.redirect('/');
});


module.exports = router;