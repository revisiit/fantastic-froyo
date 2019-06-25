const { User } = require('../models')
const bcrypt = require('bcryptjs')
const { FilterUser } = require('./helpers')

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
            entity: {
              Name: user.first_name,
              LastName: user.last_name,
              IsAdmin: user.IsAdmin,
              Phone: user.phone,
            },
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
  }).then(userdetails => {
    if (userdetails)
      bcrypt.compare(password, userdetails.password, (err, verified) => {
        if (verified) {
          req.session.userId = userdetails._id
          FilterUser(userdetails),
            res.send({
              isLoggedIn: true,
              entity: userdetails,
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
        userinfo: {
          Name: user.first_name,
          LastName: user.last_name,
          IsAdmin: user.IsAdmin,
          Phone: user.phone,
        },
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
