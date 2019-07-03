const { Package } = require('../models')

exports.searchItem = (req, res) => {
  var item = req.body.item
  Package.find({
    name: {
      $regex: new RegExp(item),
    },
  })
    .select({
      _id: 0,
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
}
