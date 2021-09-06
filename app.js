const express = require("express");
const bodyParser = require("body-parser");
const videoRoutes = require("./routes/videos");
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

app.listen(8080);
