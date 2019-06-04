const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PackageSchema = new Schema({

    _id: Schema.Types.ObjectId,

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
        type: Number,
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

    itenary: {
        day: Number,
        content: [String],
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

    category: {
        name: String,
        packages: [String],
    }

});

module.exports = mongoose.model('packages', PackageSchema);