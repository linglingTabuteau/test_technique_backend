const { Sequelize } = require("sequelize");

// connect prosgres
const sequelize = new Sequelize(
  "postgres://lingling@localhost:5432/test_technique"
);

const testConnectionDabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  sequelize: sequelize,
  testConnectionDabase: testConnectionDabase,
};
