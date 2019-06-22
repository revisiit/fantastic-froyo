const { Package, Itenary, Category } = require('../models/index')

exports.getOnePackage = (req, res) => {
  // TODO: Here fetch itenaries the same way category is fetched
  Package.findById(req.params.packageId)
    .then(packagebyid => {
      if (!packagebyid) {
        res.send({
          message: 'Package with that id was not found ' + req.params.packageId,
        })
      }
      Category.findById(packagebyid.categories)
        .select({
          _id: 0,
        })
        .then(categorydetails => {
          Itenary.findById(packagebyid.itenary)
            .select({
              _id: 0,
            })
            .then(itenarydetails => {
              if (!itenarydetails || !categorydetails) {
                res.send('Iternary or category not found')
              } else
                res.send({
                  ...packagebyid.toObject(),
                  itenary: itenarydetails,
                  category: categorydetails,
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
  package.save(function(err) {
    if (err) {
      res.send({
        success: false,
        error: err,
      })
    } else {
      res.send({
        success: true,
        entity: package,
      })
    }
  })
}
