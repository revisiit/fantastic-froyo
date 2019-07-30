const mongoose = require('mongoose')
const package = require('./Package')
const user = require('./User')
// const { User } = require('./index') Is this valid here ?
const { Schema } = mongoose
const BookingSchema = new Schema(
  {
    package: [
      {
        type: Schema.ObjectId,
        ref: package,
      },
    ],

    user: {
      type: Schema.ObjectId,
      ref: user,
    },

    time: { type: Date, default: Date.now },
  },
  { versionKey: false },
)
module.exports = mongoose.model('booking', BookingSchema)
