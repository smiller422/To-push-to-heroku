const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PizzaOrder extends Model {}
//these properties become field on our sql tables
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
         return JSON.parse(this.getDataValue('toppings')); // Parse the value of the 'toppings' attribute from a stringified JSON format
      },
      set(value) {
        this.setDataValue('toppings', JSON.stringify(value)); // Stringify the value passed to the 'toppings' attribute as a JSON string
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pizza_order',  //ref for for key
  }
);

module.exports = PizzaOrder;