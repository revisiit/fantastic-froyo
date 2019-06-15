const { User } = require('../models')

exports.postUser = (req, res) => {
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  })

  user.save(function(err) {
    if (err) {
      res.send({
        success: false,
        error: err,
      })
    } else {
      res.send({
        success: true,
        entity: user,
      })
    }
  })
}
