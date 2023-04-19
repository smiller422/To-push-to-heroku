const router = require('express').Router();

//const { User } = require('../models');

router.get('/', async (req, res) => {

    console.log("IN THE USER ROUTES");
    res.render('homepage');
});








module.exports = router;