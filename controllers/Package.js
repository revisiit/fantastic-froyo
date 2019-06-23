const { Package, Itenary, Category } = require('../models')

exports.getOnePackage = (req, res) => {
  // TODO: Here fetch itenaries the same way category is fetched
  Package.findById(req.params.packageId)
    .then(packagebyid => {
      if (!packagebyid) {
        res.send({
          message: 'Package with that id was not found ' + req.params.packageId,
        })
      }
      Category.find({
        _id: {
          $in: packagebyid.categories,
        },
      })
        .select({
          _id: 0,
        })
        .then(categories => {
          Itenary.find({
            _id: {
              $in: packagebyid.itenary,
            },
          })
            .select({
              _id: 0,
            })
            .then(itenaries => {
              res.send({
                ...packagebyid.toObject(),
                itenaries,
                categories,
              })
            })
        })
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

exports.postPackage = ({ body }, res) => {
  const package = new Package({
    name: body.name,
    description: body.description,
    price: body.price,
    location: body.location,
    duration: body.duration,
    activites: body.activites,
    images: body.images,
    itenary: body.itenary,
    categories: body.categories,
    inclusions: body.inclusions,
    exclusions: body.exclusions,
    conditions: body.conditions,
  })
  // TODO: Make this similar to category. No need for finding itenary objects.
  package
    .save()
    .then(() => {
      res.send({
        success: true,
        entity: package,
      })
    })
    .catch(err => {
      res.send({
        success: true,
        error: err,
      })
    })
}
