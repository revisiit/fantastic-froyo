const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

const { connect, addDummyData } = require('./database')
const apiRoutes = require('./routes')

const app = express()

// Connect to Mongo Database
connect()

// Enable Cross Origin Resource Sharing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

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
