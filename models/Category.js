const mongoose = require('mongoose')
const { Schema } = mongoose
const package = require('./Package')

const Category = new Schema(
  {
    name: String,
    packages: {
      type: [package.schema],
      ref: 'package',
    },
  },
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('category', Category)
