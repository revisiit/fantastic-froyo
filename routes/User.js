const { Router } = require('express')
const controller = require('../controllers/User')
const middlewares = require('./middlewares')

const router = Router()

router.post('/register', controller.postUser)

router.post('/login', controller.login)

router.post('/isAuthenticated', controller.isAuthenticated)

router.post('/logout', controller.logout)

router.get('/alluser', middlewares.AdminAuth, controller.getAllUser)

module.exports = router
