const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

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

app.use(
  session({
    secret: 'Notsureaboutitsfunctionality',
    resave: true,
    saveUninitialized: false, //Couldnt understand the purpose of it
    store: new MongoStore({
      url: 'mongodb://Sanjay:password99@ds161804.mlab.com:61804/visitdb',
    }),
  }),
)

app.use('/api/v1', apiRoutes)

app.get('/', (req, res) => {
  res.send('Server functional. Go to /api/v1.')
})

// Uncomment next line if you want to add dummy data to db
// addDummyData()

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000')
})
