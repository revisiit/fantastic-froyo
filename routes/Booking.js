const { Router } = require('express')
const controller = require('../controllers/Booking')
const middlewares = require('./middlewares')
const router = Router()

router.post('/', middlewares.Loggedin, controller.postBooking)

router.get('/:viewbooking', controller.viewbooking)

module.exports = router
