const { Itenary } = require('../models')

exports.postItenary = (req, res) => {
  var newitenary = new Itenary({
    day: req.body.day,
    content: req.body.content,
  })
}
