const express = require("express");

const tagsController = require("../controllers/tag");

const router = express.Router();


// post /tag
router.post("/", tagsController.postTag);


// delete /tag/:value
router.delete("/:value", tagsController.deleteTag);

module.exports = router;