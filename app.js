const express = require("express");
const bodyParser = require("body-parser");

const videoRoutes = require("./routes/video");
const tagRoutes = require("./routes/tag");
const { sequelize } = require("./database");
const Video = require("./models/Tag");
const Tag = require("./models/Video");

const app = express();

app.use(bodyParser.json());

app.use("/video", videoRoutes);
app.use("/tag", tagRoutes);

Video.belongsToMany(Tag, { through: 'VideoTags' });
Tag.belongsToMany(Video, { through: 'VideoTags' });

(async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.log(err);
  }
})();

app.listen(8080);