const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { filterUser } = require('./helpers')

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
            entity: filterUser(user.toObject()),
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

exports.login = (req, res) => {
  const { email, password } = req.body

  User.findOne({
    email,
  }).then(user => {
    if (user)
      bcrypt.compare(password, user.password, (err, verified) => {
        if (verified) {
          req.session.userId = user._id
          res.send({
            isLoggedIn: true,
            entity: filterUser(user.toObject()),
          })
        } else
          res.send({
            isLoggedIn: false,
            error: err,
          })
      })
  })
}

exports.isAuthenticated = (req, res) => {
  const { userId } = req.session
  if (userId) {
    User.findById(userId).then(user => {
      res.send({
        isAuthenticated: true,
        entity: filterUser(user.toObject()),
      })
    })
  } else {
    res.send({
      isAuthenticated: false,
    })
  }
}

exports.logout = (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.send({
          success: false,
          error: err,
        })
      } else {
        res.send({
          success: true,
        })
      }
    })
  }
}
