const { Category, Package } = require('../models/index')

exports.getAllCategories = (req, res) => {
  Category.find({})
    .then(categories => {
      res.send(categories)
    })
    .catch(err => {
      if (err) console.log(err)
    })
}

const catNotFound = (res, id) =>
  res.send({
    message: `Category with id ${id} was not found`,
  })

exports.getOneCategory = (req, res) => {
  const id = req.params.categoryId
  Category.findById(id)
    .select()
    .then(category => {
      if (!category) {
        catNotFound(res, id)
      }

      Package.find({ categories: id }).then(packages => {
        res.send({
          ...category.toObject(),
          packages,
        })
      })
    })
    .catch(err => {
      catNotFound(res, id)
    })
}

exports.postCategory = (req, res) => {
  const { name } = req.body

  const newCat = new Category({
    name,
  })

  newCat
    .save()
    .then(() => {
      res.send({
        success: true,
        entity: newCat,
      })
    })
    .catch(err => {
      res.send({
        success: false,
        error: err,
      })
    })
}
