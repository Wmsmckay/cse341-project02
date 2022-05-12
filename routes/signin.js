const express = require('express');
// const Controller = require('../controllers/users');
const router = express.Router();
const {ensureGuest} = require('../helpers/auth')

router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout:'login',
    })
});

module.exports = router;
