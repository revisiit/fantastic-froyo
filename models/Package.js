const mongoose = require('mongoose')
const { Schema } = mongoose
const Itenary = require('./Itenary')
const Category = require('./Category')

const PackageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 2,
    },

    description: {
      type: String,
      required: true,
      minlength: 4,
    },

    location: {
      type: String,
      minlength: 4,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
    },

    activites: {
      type: [String],
      trim: true,
      minlength: 3,
    },

    img: {
      contentType: String,
      data: Buffer,
    },

    itenaries: [
      {
        type: Schema.ObjectId,
        ref: 'Iternary',
      },
    ],

    categories: [
      {
        type: Schema.ObjectId,
        ref: 'Category',
      },
    ],

    inclusion: {
      type: [String],
      default: undefined,
    },

    exclusion: {
      type: [String],
      default: undefined,
    },

    conditions: {
      type: [String],
      required: true,
      default: undefined,
    },

    slug: {
      type: String,
      unique: true,
      required: true,
      dropDups: true,
    },
  },
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('package', PackageSchema)
