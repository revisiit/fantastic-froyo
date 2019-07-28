const mongoose = require('mongoose')
const package = require('./Package')
const { Schema } = mongoose
const BookingSchema = new Schema(
  {
    packageid: {
      type: Schema.ObjectId,
      ref: package,
    },
    Name: {
      type: String,
      minlength: 3,
      required: true,
    },
  },
  { versionKey: false },
)
module.exports = mongoose.model('booking', BookingSchema)
