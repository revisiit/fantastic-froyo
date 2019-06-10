const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser')

// TODO: Restructure this as per Github comments
const User = require('./models/User') // Just for testing purpose
const Package = require('./models/Package') // Just for testing purpose
const Iternary = require('./models/Itenary') // Just for testing purpose
const Category = require('./models/Category') // Just for testing purpose

const { connect } = require('./database')
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

app.listen(3000, () => {
  console.log('Server running on http://127.0.0.1:3000')
})

// TESTING!!!

// const newiternary = new Iternary({
//   day: 10,
//   content: ['iternary-3', 'iternary-4'],
// })

// newiternary.save(function(err, dataSaved) {
//   if (err) return console.log(err)

//   const newpackages = new Package({
//     name: 'Coorg',
//     description: 'Checking',
//     location: 'Chennai',
//     duration: 5,
//     iternary: [newiternary],
//     conditions: ['Checking', '1', '2'],
//   })

//   newpackages.save(function(err, dataSaved3) {
//     if (err) return console.log(err)

//     const newuser = new User({
//       first_name: 'Sanjay',
//       email: 'checking-25@gmail.com',
//       phone: 9500006153,
//       password: 'Hello',
//     })
//     console.log(dataSaved3)

//     newuser.save(function(err, dataSaved1) {
//       if (err) return console.log(err)
//       console.log(dataSaved1)
//     })

//     const newcategory = new Category({
//       name: 'Romance',
//       packages: [newpackages],
//     })

//     newcategory.save(function(err, dataSaved2) {
//       if (err) return console.log(err)
//       console.log(dataSaved2)
//     })
//   })
// })
