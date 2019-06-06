const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const package = require('./Package');

const Category = new Schema({

    name: String,
    packages: {
        type: [package.schema],
        ref: 'package',
    },

})

module.exports = mongoose.model('category', Category);