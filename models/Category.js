const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const package = require('./Package');

const Category = new Schema({

    name: String,
    packages: {
        type: Schema.Types.ObjectId,
        ref: 'package',
    },

})

module.exports = mongoose.model('category', Category);