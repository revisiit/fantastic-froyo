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

  /**
   * Logs the request on the console
   */
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

  Loggedin: function(req, res, next) {
    const { userId } = req.session
    User.findById(userId)
      .then(user => {
        if (user) {
          next()
        } else {
          res.send('Log in to Book')
        }
      })
      .catch(err => {
        res.send('Booking Failed')
      })
  },
}

// isAuthenticatinon

// const session_id = req.cookie.connect_sid
// find session_id in sessions table => user_id
// user_id => user.isAdmin

// res.send()

// isLoggedIn
// user -> authenticated
// create new entry -> session._id
// res.cookie('connect_sid', session_id) //
// res.send('Logged In')

// browser:
//   SET_COOKIE connect_sid=session_id
