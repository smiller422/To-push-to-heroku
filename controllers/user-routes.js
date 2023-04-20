const router = require('express').Router();
const User = require('../models/User');



router.get('/', (req, res) => {
    User.f
})


 router.post('/', async (req, res) => {
    console.log(req);
    const userData = await User.create({
        username: req.body.username,
        phone_number: req.body.phone_number,
        email: req.body.email,
        password: req.body.password
    });
    
 });
//const { User } = require('../models');

router.get('/', async (req, res) => {

    console.log("IN THE USER ROUTES");
    res.render('homepage');
});








module.exports = router;