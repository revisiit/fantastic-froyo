const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { filterUser, failure, success } = require('./helpers')

exports.postUser = (req, res) => {
  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  })

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return err
      else user.password = hash
      user
        .save()
        .then(() => {
          res.send(success(filterUser(user.toObject())))
        })
        .catch(err => {
          res.send(failure(err))
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

exports.isAuthenticated = (req, res, next) => {
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
        res.send(failure(err))
      } else {
        res.send({
          success: true,
        })
      }
    })
  }
}

exports.getAllUser = (req, res) => {
  User.find({})
    .then(allusers => {
      res.send(allusers)
    })
    .catch(err => {
      res.send('Error in fetching Details')
    })
}
