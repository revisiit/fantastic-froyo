const { User } = require('../models')
module.exports = {
  FilterUser: function(user) {
    User.findOne(user).then(() => {
      delete user.password, delete user._id
    })
  },
}
