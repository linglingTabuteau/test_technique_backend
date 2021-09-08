const express = require("express");
const bodyParser = require("body-parser");

const videoRoutes = require("./routes/video");
const tagRoutes = require("./routes/tag");
const { sequelize } = require("./database");
const Video = require("./models/Tag");
const Tag = require("./models/Video");
const VideoTag = require("./models/VideoTag");

const app = express();

app.use(bodyParser.json());

app.use("/video", videoRoutes);
app.use("/tag", tagRoutes);

Video.belongsToMany(Tag, { through: VideoTag });
Tag.belongsToMany(Video, { through: VideoTag });

(async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.log(err);
  }
})();

app.listen(8080);
