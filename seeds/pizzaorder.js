const { Order } = require('../models');

const pizzaOrderData = [
  {
    size: 'small',
    sauce: 'Hearty Marinara Sauce',
    toppings: ['pepperoni', 'onions'],
  },
  {
    size: 'medium',
    sauce: 'Garlic Parmesan Sauce',
    toppings: ['sausage', 'spinach', 'onions'],
  },
  {
    size: 'large',
    sauce: 'Honey BBQ Sauce',
    toppings: ['ham', 'meatball'],
  },
];

const seedPizzaOrders = () => Order.bulkCreate(pizzaOrderData);

module.exports = seedPizzaOrders;