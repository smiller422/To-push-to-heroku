const router = require('express').Router();

//const { User } = require('../models');

router.get('/', async (req, res) => {

    console.log("IN THE USER ROUTES");
    res.render('login');
});


module.exports = router;

//here is our get request to the login page, root '/' , renders the login page view, the one
//with the sign up login