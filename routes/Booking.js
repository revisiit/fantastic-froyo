const { Router } = require('express')
const controller = require('../controllers/Booking')
const router = Router()

router.post('/', controller.booking)

module.exports = router
