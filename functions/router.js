const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('routes/episodeIndex');

router.get("/episodes", episodes);
router.get("/episdoe-index/:index", episodeIndex)
module.exports = router;