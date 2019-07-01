/**
 * MIDDLEWARES
 *
 * Contains all the middlewares used in the routes.
 * Avoid doing res.send() in the middelwares unless it's an error
 * and you don't want the route controller to be invoked.
 */

const { User } = require('../models')

module.exports = {
  /**
   * Just prints hello in the console
   */
  hello: function(req, res, next) {
    console.log('Hello, user accessing API')
    next()
  },

  /**
   * Prints the time the user is accessing the api
   */
  time: function(_, __, next) {
    const time = new Date()
    console.log('TIME: ', time)
    // make sure you call next in the middelware
    next()
  },

  log: function(req, res, next) {
    console.log('Requested Method:', req.method)
    console.log('Requested URL:', req.originalUrl)
    console.log('Time :', new Date())
    next()
  },

  AdminAuth: function(req, res, next) {
    const { userId } = req.session
    User.findById(userId)
      .then(user => {
        if (user.isAdmin == true) {
          next()
        } else {
          res.redirect('/')
        }
      })
      .catch(err => {
        res.send(err)
      })
  },
}
