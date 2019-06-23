const { User } = require('../models')
const bcrypt = require('bcryptjs')

exports.postUser = (req, res) => {
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return err
      else user.password = hash
      user
        .save()
        .then(() => {
          res.send({
            success: true,
            entity: user,
          })
        })
        .catch(err => {
          res.send({
            success: false,
            error: err,
          })
        })
    })
  })
}

exports.Login = (req, res) => {
  User.findOne({
    email: req.body.email,
  }).then(userdetails => {
    if (userdetails)
      bcrypt.compare(
        req.body.password,
        userdetails.password,
        (err, verified) => {
          if (verified) {
            // req.session.userId = userdetails._id  --ERROR--
            res.send({
              success: true,
              entity: userdetails,
            })
          } else
            res.send({
              success: false,
              error: err,
            })
        },
      )
  })
}
