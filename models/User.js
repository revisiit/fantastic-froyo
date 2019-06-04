const mongoose = require('mongoose');
const packages = require('./Packages');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

    first_name: {

        type: String,
        required: true,
        minlength: 4,
        trim: true,

    },

    last_name: {

        type: String,
        minlength: 4,
        trim: true

    },

    email: {

        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },

    phone: {

        type: Number,
        minlength: 9,
        maxlength: 11,
        required: true,

    },

    password: {

        type: String,
        default: '',

    },

    isAdmin: {

        type: Boolean,
        default: false,

    },

    packages: {

        type: Schema.Types.ObjectId,
        ref: 'packages'

    }

});

module.exports = mongoose.model('user', UserSchema);