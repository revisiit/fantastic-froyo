const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const { connect, addDummyData } = require('./database')
const apiRoutes = require('./routes')

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

// Uncomment next line if you want to add dummy data to db
// addDummyData()

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000')
})
