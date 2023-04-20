const { Order } = require('../models');

const pizzaOrderData = [
  {
    size: 'small',
    sauce: 'Hearty Marinara Sauce',
    toppings: ['pepperoni', 'onions'],
    user_id:3
  },
  {
    size: 'medium',
    sauce: 'Garlic Parmesan Sauce',
    toppings: ['sausage', 'spinach', 'onions'],
    user_id:1
  },
  {
    size: 'large',
    sauce: 'Honey BBQ Sauce',
    toppings: ['ham', 'meatball'],
    user_id:2
  },
];

const seedPizzaOrders = () => Order.bulkCreate(pizzaOrderData);

module.exports = seedPizzaOrders;