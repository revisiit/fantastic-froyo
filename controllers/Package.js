const { Package } = require('../models/index')

exports.getOnePackage = (req, res) => {
  Package.findById(req.params.packageId)
    .select({
      'iternary._id': 0,
    })
    .then(packagebyid => {
      if (!packagebyid) {
        res.send({
          message: 'Package with that id was not found ' + req.params.packageId,
        })
      }
      res.send(packagebyid)
    })
    .catch(err => {
      if (err.kind === 'ObjectId') {
        return res.send({
          message: 'Package with that id was not found ' + req.params.packageId,
        })
      }
      return res.send({
        message: 'Error retriveing the package with id ' + req.params.packageId,
      })
    })
}

exports.getAllPackages = (req, res) => {
  Package.find({})
    .select({
      _id: 1,
      name: 1,
      description: 1,
      images: 1,
    })
    .exec(function(err, allpackages) {
      if (err) return console.log(err)
      res.send(allpackages)
    })
}
