const { testConnectionDabase } = require("../database");
const Video = require("../models/Video");

exports.getVideos = async (req, res, next) => {
  let videos = await Video.findAll();
  res.status(200).json(videos);
};

exports.postVideo = async (req, res, next) => {
  testConnectionDabase();

  const name = req.body.name;
  const description = req.body.description;
  const url = req.body.url;

  //   Video.create({
  //     name: name,
  //     description: description,
  //     url: url,
  //   })
  //     .then((result) => {
  //       console.log(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  await Video.create({
    name: name,
    description: description,
    url: url,
  });
};
