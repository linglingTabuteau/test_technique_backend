const express = require("express");

const videosController = require("../controllers/video");

const router = express.Router();

// get /videos
router.get("/", videosController.getVideos);

// post /video
router.post("/", videosController.postVideo);

// put /video/:videoId
router.put("/:videoId", videosController.putVideo);

// put /video/:videoId
router.put("/:videoId/tags", videosController.putVideoTags);

// delete /video/:videoId
router.delete("/:videoId", videosController.deleteVideo);

module.exports = router;
