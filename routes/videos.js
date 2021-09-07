const express = require("express");

const videosController = require("../controllers/videos");

const router = express.Router();

// get /videos/getvideo
router.get('/getvideo',videosController.getVideos );

// post /videos/addvideo
router.post("/postvideo", videosController.postVideo);


// put /videos/putvideo
router.put("/putvideo", videosController.modifyVideo);


module.exports = router;