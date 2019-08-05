const { Package, Itenary, Category } = require('../models')
const { success, failure } = require('./helpers')

exports.getOnePackage = (req, res, next) => {
  // TODO: Here fetch itenaries the same way category is fetched
  Package.findOne({ slug: req.params.slug })
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
      slug: 1,
    })
    .then(allpackages => {
      res.send(allpackages)
    })
    .catch(err => {
      if (err) console.log(err)
    })
}

exports.postPackage = ({ body }, res) => {
  const slug = body.name
    .split(' ')
    .join('-')
    .toLowerCase()
  const name = body.name
  const packagedetails = new Package({
    name: body.name,
    description: body.description,
    price: body.price,
    location: body.location,
    duration: body.duration,
    activites: body.activites,
    images: body.images,
    itenaries: body.itenaries,
    categories: body.categories,
    inclusions: body.inclusions,
    exclusions: body.exclusions,
    conditions: body.conditions,
    slug,
  })
  Package.findOne({ name: name }).then(package => {
    if (package) res.send('Package already exists')
    else {
      packagedetails
        .save()
        .then(() => {
          res.send(success(packagedetails))
        })
        .catch(err => {
          res.send(failure(err))
        })
    }
  })
}
