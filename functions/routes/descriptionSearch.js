const bbt = require('big-bang-theory');

const descriptionSearch = (req, res) => {
    function stringSort(episode){
        str = "" + episode.summary.replace(/\s+/g, '-').toLowerCase();
        return str.includes(req.params.string);
    }
    selection = bbt._embedded.episodes.filter(stringSort);
  if (selection.length == 0){
    res.status(200).json({
      success: false,
      string: req.params.string,
      data: "No episodes whose descriptions contain the requested string."
    });
  }
  else {
    res.status(200).json({
      success: true,
      string: req.params.string,
      data: selection,
    });
  }
  
}



module.exports = descriptionSearch;