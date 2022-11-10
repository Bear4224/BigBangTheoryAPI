const bbt = require('big-bang-theory');

const episodeIndex = (req, res) => {
  if (req.params.index > 278){
    res.status(200).json({
      success: false, 
      index: req.params.index, 
      data: "Index value is out of range. There are only 279 episodes of this show."
    });
  }
  else {
    res.status(200).json({
      success: true,
      index: req.params.index,
      data: bbt._embedded.episodes[req.params.index]
    });
  }
  
}

module.exports = episodeIndex;

