// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Order extends Model {}

// Order.init(
//     {

//         category: {
//             type: DataTypes.BOOLEAN,
//             knots: true,
//             personal_pan: true,
//             mozzarella_sticks: true,
//             boneless_wings: true,
//             allowNull: false,
//         },
//         dough: {
//             type: DataTypes.BOOLEAN,
//             gluten_free: true,
//             traditional: true,
//             allowNull: false,
//         },
//         sauce: {
//             type: DataTypes.BOOLEAN,
//             classic_tomato: true,
//             parm_romano: true,
//             basil_pesto: true,
//             spicy_tomato: true,
//             allowNull: false,
//         },
//         toppings: {
//             type: DataTypes.BOOLEAN,
//             cheese: true,
//             onions: true,
//             green_peppers: true,
//             tomato: true,
//             crush_garlic: true,
//             mushroom: true,
//             olives: true,
//             banana_peppers: true,
//             artichoke: true,
//             grilled_onion: true,
//             pineapple: true,
//             allowNull: false,
//         },
//         meat_toppings: {
//             type: DataTypes.BOOLEAN,
//             pepperoni: true,
//             hamburger: true,
//             turkey: true,
//             italian_sausage: true,
//             bacon: true,
//             canadian_bacon: true,
//             chicken: true,
//             plant_base_meat: true,
//             salomi: true,
//             allowNull: false,
//         },
//         add_ons: {
//             type: DataTypes.BOOLEAN,
//             hamburger: true,
//             turkey: true,
//             italian_sausage: true,
//             bacon: true,
//             canadian_bacon: true,
//             chicken: true,
//             plant_base_meat: true,
//             allowNull: false,

//         },
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'painting',
//     }
// );

// module.exports = Order;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PizzaOrder extends Model {}

PizzaOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sauce: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    toppings: {
      type: DataTypes.TEXT,
      allowNull: false,
      get() {
        // Getter for the 'toppings' attribute

        return JSON.parse(this.getDataValue('toppings')); // Parse the value of the 'toppings' attribute from a stringified JSON format
      },
      set(value) {
        // Setter for the 'toppings' attribute

        this.setDataValue('toppings', JSON.stringify(value)); // Stringify the value passed to the 'toppings' attribute as a JSON string
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pizza_order',
  }
);

module.exports = PizzaOrder;