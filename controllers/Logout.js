exports.Logout = (req, res) => {
  if (req.session) {
    req.session.delete(function(err) {
      if (err) return err
      else return res.redirect('/')
    })
  }
}
