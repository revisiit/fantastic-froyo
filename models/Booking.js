const mongoose = require('mongoose')
const package = require('./Package')
const { Schema } = mongoose
const BookingSchema = new Schema({
  packageid: {
    type: Schema.ObjectId,
    ref: package,
  },
  Name: {
    type: package.name,
    ref: package,
  },
})
module.exports = mongoose.model('booking', BookingSchema)
