const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const iternary = require('./Iternary');

const PackageSchema = new Schema({

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
        type: {
            type: String,
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
        },

        coordinates: {
            type: [Number],
            required: true
        }
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
        type: Schema.Types.ObjectId,
        ref: 'iternary',
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
    }

});

module.exports = mongoose.model('package', PackageSchema);