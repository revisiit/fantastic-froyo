const mongoose = require('mongoose')
const { Schema } = mongoose

const PersonSchema = new Schema([
  {
    title: {
      type: String,
      required: true,
    },
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
  },
])

module.exports = mongoose.model('Registration_Details', PersonSchema)
