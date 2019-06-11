// TODO: Restructure this as per Github comments
const User = require('../models/User') // Just for testing purpose
const Package = require('../models/Package') // Just for testing purpose
const Iternary = require('../models/Itenary') // Just for testing purpose
const Category = require('../models/Category') // Just for testing purpose

module.exports = {
  TestingData: () => {
    const newiternary = new Iternary({
      day: 10,
      content: ['iternary-3', 'iternary-4'],
    })

    newiternary.save(function(err, dataSaved) {
      if (err) return console.log(err)

      const newpackages = new Package({
        name: 'Coorg',
        description: 'Checking',
        location: 'Chennai',
        duration: 5,
        iternary: [newiternary],
        conditions: ['Checking', '1', '2'],
      })

      newpackages.save(function(err, dataSaved3) {
        if (err) return console.log(err)

        const newuser = new User({
          first_name: 'Sanjay',
          email: 'checking-26@gmail.com',
          phone: 9500006153,
          password: 'Hello',
        })
        console.log(dataSaved3)

        newuser.save(function(err, dataSaved1) {
          if (err) return console.log(err)
          console.log(dataSaved1)
        })

        const newcategory = new Category({
          name: 'Romance',
          packages: [newpackages],
        })

        newcategory.save(function(err, dataSaved2) {
          if (err) return console.log(err)
          console.log(dataSaved2)
        })
      })
    })
  },
}
