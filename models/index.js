// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

// Set up Sequelize connection using environment variables
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,  // mysql, sqlite, etc.
});

// Import models (Vehicle, Booking, etc.)
const Vehicle = require('./vehicle')(sequelize, DataTypes);
const Booking = require('./booking')(sequelize, DataTypes); // If you have a Booking model

// Export the sequelize instance and models
module.exports = { sequelize, Vehicle, Booking };
