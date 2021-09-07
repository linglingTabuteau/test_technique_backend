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

  try {
    await Video.create({
      name: name,
      description: description,
      url: url,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.putVideo = async (req, res, next) => {
  const videoId = req.params.videoId;
  const updatedName = req.body.name;
  const updatedDescription = req.body.description;
  const updatedUrl = req.body.url;
  let updatedVideo;
  try {
    updatedVideo = await Video.findByPk(videoId);
    updatedVideo.name = updatedName;
    updatedVideo.description = updatedDescription;
    updatedVideo.url = updatedUrl;
  } catch (err) {
    console.log(err);
  }
  await updatedVideo.save();
};

exports.deleteVideo = async (req, res, next) => {
  const videoId = req.params.videoId;
  let toDeleteVideo;
  try {
    toDeleteVideo = await Video.findByPk(videoId);
  } catch (err) {
    console.log(err);
  }
  await toDeleteVideo.destroy();
};
