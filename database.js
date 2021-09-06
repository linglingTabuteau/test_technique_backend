const { Sequelize } = require("sequelize");

// connect prosgres
exports.sequelize = new Sequelize(
  "postgres://lingling@localhost:5432/test_technique"
);

exports.testConnectionDabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

