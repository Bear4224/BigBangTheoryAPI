const router = require('express').Router();
const episodes = require('./routes/episodes');
const episodeIndex = require('./routes/episodeIndex');
const season = require('./routes/season');
const episodeSeason = require('./routes/episodeSeason');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/season/:seasonNum", season);
router.get("/season-episode/:seasonNum/:index", episodeSeason);
module.exports = router;