module.exports = {
  filterUser: function(user) {
    delete user.password
    delete user._id
    return user
  },
}
