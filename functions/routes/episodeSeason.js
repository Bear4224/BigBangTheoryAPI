const bbt = require('big-bang-theory');

const episodeSeason = (req, res) => {
    function finder(episode){
        if(episode.season == req.params.seasonNum){
            if(episode.number == req.params.index){
                return true;
                exit;
            }
        }
    }
    selection = bbt._embedded.episodes.filter(finder)
  if (req.params.seasonNum > 12){
    res.status(200).json({
      success: false, 
      seasonNum: req.params.seasonNum,
      episodeNum: req.params.index,
      data: "Season number is out of range. There are only 12 seasons of this show."
    });
  }
  else if (selection == []){
    res.status(200).json({
        success: false, 
        seasonNum: req.params.seasonNum,
        episodeNum: req.params.index,
        data: "Episode number is out of range for the selected season."
    });
}
  else {
    res.status(200).json({
      success: true,
      seasonNum: req.params.seasonNum,
      data: selection,
    });
  }
  
}



module.exports = episodeSeason;
