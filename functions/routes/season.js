const bbt = require('big-bang-theory');

const season = (req, res) => {
  if (req.params.seasonNum > 12){
    res.status(200).json({
      success: false, 
      seasonNum: req.params.seasonNum, 
      data: "Season number is out of range. There are only 12 seasons of this show."
    });
  }
  else {
    res.status(200).json({
      success: true,
      seasonNum: req.params.seasonNum,
      data: bbt._embedded.episodes.filter(seasonSort, req.params.seasonNum),
    });
  }
  
}

function seasonSort(episode, seasonNum){
    return episode.season == seasonNum;
}

module.exports = season;
