const mongoose = require('mongoose')
const package = require('./Package')
const user = require('./User')
// const { User } = require('./index') Is this valid here ?
const { Schema } = mongoose
const BookingSchema = new Schema(
  {
    Packageid: {
      type: Schema.ObjectId,
      ref: package,
    },

    Userid: {
      type: Schema.ObjectId,
      ref: user,
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
