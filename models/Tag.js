const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../database");

const Tag = sequelize.define(
  "Tag",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Tag === sequelize.models.Tag); // true


module.exports = Tag;
