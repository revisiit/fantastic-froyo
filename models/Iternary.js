const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Itenary = new Schema({

    iternary_id: Schema.Types.ObjectId,
    day: Number,
    content: [String],

})

module.exports = mongoose.model('iternary', Itenary);