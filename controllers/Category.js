const { Category } = require('../models/index')

exports.getAllCategories = (req, res) => {
  Category.find({})
    .select('name')
    .exec(function(err, categories) {
      if (err) return err
      res.send(categories)
    })
}

exports.getOneCategory = (req, res) => {
  Category.findById(req.params.categoryId)
    .select({
      'packages.iternary._id': 0,
    })
    .then(category => {
      if (!category) {
        res.send({
          message: `Category with id ${req.params.categoryId} was not found`,
        })
      }
      res.send(category)
    })
    .catch(err => {
      res.send({
        message: `Category with id ${req.params.categoryId} was not found`,
      })
    })
}
