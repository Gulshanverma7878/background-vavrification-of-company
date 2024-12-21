const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables from .env file

const sequelize = new Sequelize(
  "defaultdb",
  "avnadmin",
  password,
  {
    host: "mysql-2cbbda63-chosenx-0c3a.l.aivencloud.com",
    port:12877,
    dialect: "mysql",
    dialectModule: require("mysql2"), // Explicitly use mysql2 for Sequelize
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
