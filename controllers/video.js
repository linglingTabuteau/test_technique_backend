const { testConnectionDabase } = require("../database");
const Video = require("../models/Video");
const Tag = require("../models/Tag");

exports.getVideos = async (req, res, next) => {
  let videos = await Video.findAll({
    include: {
      model: Tag,
      through: {
        attributes: []
      }
    }
  });

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
    res.status(500).json('an error occured');
  }

  res.status(201).json();
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

exports.putVideoTags = async (req, res, next) => {
  const videoId = req.params.videoId;
  const tagIds = req.body;

  try {
    let video = await Video.findByPk(videoId);
    video.setTags(tagIds);
  } catch (err) {
    console.log(err);
    res.status(500).json('an error occured');
  }

  res.status(200).json();
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
