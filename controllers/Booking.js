const { Booking, Package, User, Person } = require('../models')
const { success, failure } = require('./helpers')

exports.postBooking = (req, res) => {
  const id = req.body.package
  Package.findById(id)
    .select()
    .then(package => {
      const userid = req.session.userId
      User.findById(userid)
        .select()
        .then(user => {
          const persondetails = new Person([
            {
              title: req.body.title,
              first_name: req.body.first_name,
              last_name: req.body.last_name,
            },
          ])
          persondetails.save().then(details => {
            const packagebooked = new Booking({
              package: id,
              user: userid,
              dateoftravel: req.body.dateoftravel,
              person: [details._id],
              contactdetails: {
                first_name: user.first_name,
                last_name: user.last_name,
                phone: user.phone,
                email: user.email,
              },
              billingaddress: {
                address: req.body.address,
                city: req.body.city,
                postalcode: req.body.postalcode,
                country: req.body.country,
              },
            })
            packagebooked.save().then(bookeddetails => {
              Person.find({ _id: { $in: bookeddetails.person } }).then(
                person => {
                  res.send({
                    ...bookeddetails.toObject(),
                    person,
                  })
                },
              )
            })
          })
        })

        .catch(err => {
          res.send(failure(err))
        })
    })
}

exports.viewbooking = (req, res) => {
  const id = req.params.viewbooking
  Booking.findById(id)
    .select()
    .then(bookingdetails => {
      Package.find({ _id: { $in: bookingdetails.package } })
        .select({
          _id: 1,
          name: 1,
        })
        .then(package => {
          res.send({
            ...bookingdetails.toObject(),
            package,
          })
        })
    })
}
