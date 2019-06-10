const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Iternary = require('./Iternary')

const PackageSchema = new Schema(
  {
    package_id: Schema.Types.ObjectId,

    name: {
      type: String,
      required: true,
      trim: true,
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

    iternary: {
      type: [Iternary.schema],
      ref: 'Iternary',
    },

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
  },
  {
    versionKey: false,
  },
)

module.exports = mongoose.model('package', PackageSchema)
