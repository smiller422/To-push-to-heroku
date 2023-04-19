const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
    {

        category: {
            type: DataTypes.BOOLEAN,
            knots: true,
            personal_pan: true,
            mozzarella_sticks: true,
            boneless_wings: true,
            allowNull: false,
        },
        dough: {
            type: DataTypes.BOOLEAN,
            gluten_free: true,
            traditional: true,
            allowNull: false,
        },
        sauce: {
            type: DataTypes.BOOLEAN,
            classic_tomato: true,
            parm_romano: true,
            basil_pesto: true,
            spicy_tomato: true,
            allowNull: false,
        },
        toppings: {
            type: DataTypes.BOOLEAN,
            cheese: true,
            onions: true,
            green_peppers: true,
            tomato: true,
            crush_garlic: true,
            mushroom: true,
            olives: true,
            banana_peppers: true,
            artichoke: true,
            grilled_onion: true,
            pineapple: true,
            allowNull: false,
        },
        meat_toppings: {
            type: DataTypes.BOOLEAN,
            pepperoni: true,
            hamburger: true,
            turkey: true,
            italian_sausage: true,
            bacon: true,
            canadian_bacon: true,
            chicken: true,
            plant_base_meat: true,
            salomi: true,
            allowNull: false,
        },
        add_ons: {
            type: DataTypes.BOOLEAN,
            hamburger: true,
            turkey: true,
            italian_sausage: true,
            bacon: true,
            canadian_bacon: true,
            chicken: true,
            plant_base_meat: true,
            allowNull: false,

        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'painting',
    }
);

module.exports = Order;