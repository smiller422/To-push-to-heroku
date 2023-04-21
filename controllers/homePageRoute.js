const router = require('express').Router();
const User = require('../models/User');


router.get('/', async (req, res) => {

    console.log("IN THE USER ROUTES");
    res.render('login');
});


module.exports = router;
