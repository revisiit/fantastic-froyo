const mongoose = require('mongoose')
const { Schema } = mongoose

const Itenary = new Schema(
  {
    day: Number,
    content: [String],
  },
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('iternary', Itenary)
