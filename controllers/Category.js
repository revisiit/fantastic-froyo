const User = require('../models/User')
const Package = require('../models/Package')
const Iternary = require('../models/Iternary')
const Category = require('../models/Category')

exports.getAllCategories = (req, res) => {
  Category.find({}, 'name', function(err, categories) {
    if (err) return err
    res.send(categories)
  })
}

exports.getOneCategory = (req, res) => {
  Category.findById(req.params.categoryId)
    .select({
      __v: 0,
      'packages.iternary._id': 0,
      'packages.iternary.__v': 0,
      'packages.__v': 0,
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
