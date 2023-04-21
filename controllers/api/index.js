
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const userRoutes = require('./user-routes');


router.use('/pizza', pizzaRoutes);
router.use('/users', userRoutes);


module.exports = router;

