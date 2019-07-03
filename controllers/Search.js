const { Package } = require('../models')

exports.searchItem = (req, res) => {
  var item = req.body.item
  Package.find({
    $text: {
      $search: item,
    },

    // **** EFFICIENT SORTING METHOD ****

    // }, {
    //     score: {
    //         $meta: "textScore"
    //     }
    // })
    // .sort({
    //     score: {
    //         $meta: "textScore"
    //     }
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
