const express = require("express");
const bodyParser = require("body-parser");

const videoRoutes = require("./routes/videos");
const { sequelize } = require("./database");


const app = express();

app.use(bodyParser.json());

// resolve problem of CORS Errors
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setDefaultEncoding(
//     "Access-Control-Allow-Methods",
//     "GET, POST,DELETE,PUT"
//   );
//   res.setHeader("Access-Control-Allow-Headers","Content-Type,Authorization");
//   next();
// });

app.use("/videos", videoRoutes);

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
    // app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8080);
