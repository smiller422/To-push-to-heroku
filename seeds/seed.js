const sequelize = require('../config/connection');
const seedPizzaOrders = require('./pizzaOrderSeed');
const seedUsers = require('./userSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPizzaOrders();

  process.exit(0);
};

seedAll();