const database = require("../database");
const Video = require("../models/Video");

exports.getVideos = (req, res, next) => {
  // test connection dataBase
  database.testConnectionDabase();
  let videos = this.getVideos();
    // .then((videos) => {
    //   console.log(videos);
    //   return videos;
    //   res.status(200).json(videos);
    // })
    // .then((vireo) => res.status(200).json(videos));
};

exports.addVideo = (req, res, next) => {
  database.testConnectionDabase();
  this.createVideo();

  const name = req.body.nom;
  const content = req.body.description;
  res.status(201).json({
    message: "video has benn added successfully",
    video: {
      name: name,
      content: content,
      createdAt: new Date().toISOString(),
    },
  });
};

// exports.create = async () => {
//     await Tag.create({ value: "comedy" });
//     // Jane exists in the database now!
//     console.log(jane instanceof User); // true
//     console.log(jane.name); // "Jane"
//   };

exports.createVideo = async () => {
  await Video.sync();
  await Video.create({
    name: "JamesBond",
    description: "very good movie",
    url: "http...",
  });
  // Jane exists in the database now!
  console.log(JamesBond instanceof Video); // true
  console.log(JamesBond.description); // "Jane"
};

exports.getVideos = async () => {
//   await Video.sync();
  let videos = await Video.findAll();

  return videos;
};
