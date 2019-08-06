const mongoose = require('mongoose')
const package = require('./Package')
const user = require('./User')
const personschema = require('./Person').schema
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

    dateoftravel: {
      type: Date,
      required: true,
    },

    person: [
      {
        type: Schema.ObjectId,
        ref: personschema,
      },
    ],

    contactdetails: {
      first_name: {
        type: String,
        required: true,
        minlength: 4,
      },
      last_name: {
        type: String,
        minlength: 4,
        trim: true,
      },
      phone: {
        type: Number,
        minlength: 9,
        maxlength: 11,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please fill a valid email address',
        ],
      },
    },

    billingaddress: {
      address: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      postalcode: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 6,
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
    },

    time: { type: Date, default: Date.now },
  },
  { versionKey: false },
)
module.exports = mongoose.model('booking', BookingSchema)
