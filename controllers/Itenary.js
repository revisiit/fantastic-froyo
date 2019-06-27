const { Itenary } = require('../models')
const { success, failure } = require('./helpers')

exports.postItenary = (req, res) => {
  const { day, content } = req.body

  const itenary = new Itenary({
    day,
    content,
  })

  itenary
    .save()
    .then(_ => {
      res.send(success(itenary))
    })
    .catch(err => {
      res.send(failure(err))
    })
}
