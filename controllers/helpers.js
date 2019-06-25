const { User } = require('../models')
module.exports = {
  ilterUser: function(user) {
    User.findById(user).then(userdetails => {
      delete userdetails.password, delete userdetails._id, userdetails
    })
  },
}
