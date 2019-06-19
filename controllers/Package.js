const { Package, Itenary } = require('../models/index')

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
    .then(allpackages => {
      res.send(allpackages)
    })
    .catch(err => {
      if (err) console.log(err)
    })
}

exports.postPackage = (req, res) => {
  var packages = new Package({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    duration: req.body.duration,
    activites: req.body.activites,
    images: req.body.images,
    iternary_id: req.body.iternary,
    category: req.body.category,
    inclusions: req.body.inclusions,
    exclusions: req.body.exclusions,
    conditions: req.body.conditions,
  })
  const id_iternary = req.body.iternary
  const iternarydetails = Itenary.findById(id_iternary)
  const newpackage = new Package({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    location: req.body.location,
    duration: req.body.duration,
    activites: req.body.activites,
    images: req.body.images,
    iternary: iternarydetails,
    category: req.body.category,
    inclusions: req.body.inclusions,
    exclusions: req.body.exclusions,
    conditions: req.body.conditions,
  })
  newpackage.save(function(err) {
    if (err) {
      res.send({
        success: 'false',
        error: err,
      })
    } else {
      res.send({
        success: 'true',
        entity: newpackage,
      })
    }
  })
}
