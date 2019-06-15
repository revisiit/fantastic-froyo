const { Itenary } = require('../models')

exports.postItenary = (req, res) => {
  const { day, content } = req.body

  const itenary = new Itenary({
    day,
    content,
  })

  itenary
    .save()
    .then(_ => {
      res.send({
        success: true,
        entity: itenary,
      })
    })
    .catch(err => {
      res.send({
        success: false,
        error: err,
      })
    })
}
