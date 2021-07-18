// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
   id: {
     type: DataTypes.INTEGER,
     allownull: false,
     primaryKey: true, 
     autoIncrement: true
   },
   product_name: {
     type:Datatype.STRING,
     allownull: false
   }
   price: {
     type: Datatype.DECIMAL,
     allownull: false, 
     
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
