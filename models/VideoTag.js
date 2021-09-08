const { DataTypes } = require("sequelize");

const { sequelize } = require("../database");
const Tag = require("./Tag");
const Video = require("./Video");


const VideoTag = sequelize.define("videoTag", {
  VideoId: {
    type: DataTypes.INTEGER,
    references: {
      models: Video,
      key: "id",
    },
  },
  TagId: {
    type: DataTypes.INTEGER,
    references: {
      models: Tag,
      key: "id",
    },
  },
});



module.exports = VideoTag;
