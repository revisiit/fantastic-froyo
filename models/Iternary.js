const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Itenary = new Schema({

    day: Number,
    content: [String],

})

module.exports = mongoose.model('iternary', Itenary);