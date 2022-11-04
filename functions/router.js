const router = require('express').Router();
const episodes = require('./routes/episodes');

router.get("/episodes", episodes);

module.exports = router;
