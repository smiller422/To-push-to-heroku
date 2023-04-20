
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const userRoutes = require('./user-routes');


router.use('/pizza', pizzaRoutes);
router.use('/users', userRoutes);


module.exports = router;

//we can add user routes here later

// two separate routes here: pizza-routes and user-routes

//