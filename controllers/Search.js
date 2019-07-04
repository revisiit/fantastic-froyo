const { Package } = require('../models')
const { filterResult } = require('./helpers')

exports.searchItem = (req, res) => {
  var item = req.body.item
  Package.find(
    {
      $text: {
        $search: item,
      },
    },
    {
      score: {
        $meta: 'textScore',
      },
    },
  )
    .sort({
      score: {
        $meta: 'textScore',
      },
    })
    .select({
      _id: 0,
    })
    .then(results => {
      res.send(results)
    })
    .catch(err => {
      res.send(err)
    })

  // **** PARTIAL SEARCHING ****

  // Package.find({
  //         name: {
  //             $regex: new RegExp(item),
  //         }
  //     })
  //     .select({
  //         _id: 0,
  //     })
  //     .then(data => {
  //         res.send(data)
  //     })
  //     .catch(err => {
  //         res.send(err)
  //     })
}
