const router = require("express").Router();
const { User, Order } = require("../models");

//route here gets the user ids
router.get("/", async (req, res) => {
    console.log(req.session.user_id)

  try {
    const pizzaData = await Order.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const pizzas = pizzaData.map((pizza) => pizza.get({ plain: true }));

    res.render("menu", {
      pizzas,
      // Pass the logged in flag to the template
     
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/confirm',  async (req, res) => {

  const orders = await Order.findAll();

  const orderData =  orders[orders.length - 1];


  res.render('orderConfirm', {
    orderDataSize: orderData.size,
    orderDataSauce: orderData.sauce,
    orderDataToppings: orderData.toppings,
    orderId: orderData.id,
  });

});

router.delete('/cancelOrder/:id', async (req, res) => {

  Order.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedOrder) => {
      res.json(deletedOrder);
    })
    .catch((err) => res.json(err));
});

module.exports = router;


//requiring our user and order models, in the model folder, 
//get req to the menu page, root is '/' , 
//uses the Sequelize to fetch order data from the database using findall method.
//fetched order data is savedusing the get method.
//res.render meansd its going to menu page psssing the data as a var we can use in views