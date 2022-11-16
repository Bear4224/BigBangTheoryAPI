const bbt = require('big-bang-theory');

const titleSearch = (req, res) => {
    function stringSort(episode){
        str = "" + episode.name.replace(/\s+/g, '-').toLowerCase();
        return str.includes(req.params.string);
    }
    selection = bbt._embedded.episodes.filter(stringSort);
  if (selection.length == 0){
    res.status(200).json({
      success: false,
      string: req.params.string,
      data: "No episodes whose titles contain the requested string."
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



module.exports = titleSearch;