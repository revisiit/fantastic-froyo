const User = require('../models/User')
const Package = require('../models/Package')
const Iternary = require('../models/Iternary')
const Category = require('../models/Category')

exports.Categories = (req, res) => {
  Category.find({}, 'name', function(err, categories) {
    if (err) return err
    res.send(categories)
  })
}

exports.AllCategories = (req, res) => {
  Category.find()
    .then(allcategory => {
      res.send(allcategory)
    })
    .catch(err => {
      res.send({
        message: err.message,
      })
    })
}
