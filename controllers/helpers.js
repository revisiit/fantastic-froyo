module.exports = {
  filterUser: function(user) {
    delete user.password
    // delete user._id
    return user
  },

  success: function(data) {
    return {
      success: true,
      entity: data,
    }
  },

  failure: function(err) {
    return {
      success: false,
      error: err,
    }
  },
}
