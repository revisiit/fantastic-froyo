const { Router } = require('express')
const controller = require('../controllers/User')

const router = Router()

router.post('/', controller.postUser)

router.post('/login', controller.login)

router.post('/isAuthenticated', controller.isAuthenticated)

router.post('/logout', controller.logout)

module.exports = router
