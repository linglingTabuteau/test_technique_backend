const express = require("express");

const videosController = require("../controllers/videos");

const router = express.Router();

// get /videos
router.get("/", videosController.getVideos);

// post /video
router.post("/", videosController.postVideo);

// put /video
router.put("/:videoId", videosController.putVideo);

// delete /video
router.delete("/:videoId", videosController.deleteVideo);

module.exports = router;
