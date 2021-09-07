const express = require("express");
const bodyParser = require("body-parser");

const videoRoutes = require("./routes/videos");
const { sequelize } = require("./database");

const app = express();

app.use(bodyParser.json());

app.use("/videos", videoRoutes);

(async () => {
  try {
    await sequelize.sync();
  } catch (err) {
    console.log(err);
  }
})();

app.listen(8080);
