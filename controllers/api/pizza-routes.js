

// const router = require('express').Router();
// const { Project } = require('../../models');

// router.post('/',  async (req, res) => {
//     try {
//       const newProject = await Project.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });
  
//       res.status(200).json(newProject);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// module.exports = router;



const router = require('express').Router();
// const exphbs = require('express-handlebars');
// const path = require('path');
// const routes = require('./controllers');
// const pizzaRoutes = require('./controllers/api/pizza-routes');



const { Order } = require('../../models');

router.post('/order',  async (req, res) => {
    try {
      const newPizza = await Order.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newPizza);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;


//post request , root is '/' , 

