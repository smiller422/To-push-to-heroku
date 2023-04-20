const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homePageRoute');
const pizzaRoutes = require('./pizzaPageRoute');



router.use('/',  homeRoutes);
router.use('/menu', pizzaRoutes);
router.use('/api', apiRoutes);

module.exports = router;


//sets up our routes to homeroutes, pizzaroutes, apiroutes