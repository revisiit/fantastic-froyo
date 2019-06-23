const { User } = require('../models')

exports.postUser = (req, res) => {
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  })

  user
    .save()
    .then(() => {
      res.send({
        success: true,
        error: user,
      })
    })
    .catch(err => {
      res.send({
        success: false,
        entity: err,
      })
    })
}
