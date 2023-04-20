const User = require('./User');
const Order = require('./Order');

User.hasMany(Order, {
  foreignKey: 'user_id',
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Order, User };

//seting up our one to many relationship between user and order
// bc of module.exports, we can use this in our other files