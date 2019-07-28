const { Booking, Package, User } = require('../models')
const { success, failure } = require('./helpers')

exports.booking = (req, res) => {
  const id = req.body.packageid
  Package.findById(id)
    .select()
    .then(package => {
      const packagebooked = new Booking({
        packageid: id,
        Name: package.name,
      })
      packagebooked.save().then(bookeddetails => {
        res.send(success(bookeddetails))
      })
    })
    .catch(err => {
      res.send(failure(err))
    })
}
