const User = require('../models/User')
const Package = require('../models/Package')
const Iternary = require('../models/Iternary')
const Category = require('../models/Category')

exports.getOnePackage = (req, res) => {
  Package.findById(req.params.packageId)
    .select({
      __v: 0,
      'iternary._id': 0,
      'iternary.__v': 0,
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
  Package.find(
    {},
    {
      '-__v': 0,
      'iternary._id': 0,
      'iternary.__v': 0,
    },
    function(err, allpackages) {
      if (err) return console.log(err)
      res.send(allpackages)
    },
  )
}
