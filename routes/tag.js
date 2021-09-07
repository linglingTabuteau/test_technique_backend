const express = require("express");

const tagsController = require("../controllers/tag");

const router = express.Router();

// // get /videos
// router.get("/", videosController.getVideos);

// post /tag
router.post("/", tagsController.postTag);

// // put /video/:videoId
// router.put("/:videoId", videosController.putVideo);

// delete /tag/:tagId
router.delete("/:tagId", tagsController.deleteTag);

module.exports = router;