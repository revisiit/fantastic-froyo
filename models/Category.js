const mongoose = require('mongoose')
const { Schema } = mongoose
const package = require('./Package')

const Category = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('category', Category)
