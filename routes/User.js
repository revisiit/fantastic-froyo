const { Router } = require('express')
const controller = require('../controllers/User')

const router = Router()

router.post('/', controller.postUser)

module.exports = router
