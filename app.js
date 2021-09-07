const express = require("express");
const bodyParser = require("body-parser");

const videoRoutes = require("./routes/video");
const tagRoutes = require("./routes/tag");
const { sequelize } = require("./database");

const app = express();

app.use(bodyParser.json());

app.use("/video", videoRoutes);
app.use("/tag", tagRoutes);

(async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.log(err);
  }
})();

app.listen(8080);
