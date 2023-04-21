const router = require("express").Router();
const { User, Order } = require("../models");

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
