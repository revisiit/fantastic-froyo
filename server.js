const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const { connect } = require('./database')
const apiRoutes = require('./routes')
const testing = require('./database/addDummyData')

const app = express()

// Connect to Mongo Database
connect()

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)

app.use(bodyParser.json())

app.use('/api/v1', apiRoutes)

testing.TestingData()

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000')
})
