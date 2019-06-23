const { Router } = require('express')
const controller = require('../controllers/User')

const router = Router()

router.post('/', controller.postUser)

router.post('/login', controller.Login)

module.exports = router
