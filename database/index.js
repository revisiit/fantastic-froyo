const mongoose = require('mongoose')

const config = require('./config')
const { addDummyData } = require('./dummydata')

mongoose.Promise = global.Promise

module.exports = {
  connect: () => {
    mongoose
      .connect(config.mlab_url, {
        useNewUrlParser: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log('Connected to mLab Database.')
      })
      .catch(err => {
        console.log(
          'Could not connect to local database.\nAttempting Local Database.\n',
        )
        mongoose
          .connect(config.local_url, {
            useNewUrlParser: true,
            useCreateIndex: true,
          })
          .then(() => {
            console.log('Connected to the Local Database.')
          })
          .catch(err => {
            console.log('Failed to connect to both databases, quitting server.')
            console.log(err)
          })
      })
  },
  addDummyData,
}
