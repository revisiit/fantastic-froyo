const { Router } = require('express')
const controller = require('../controllers/User')
const middlewares = require('./middlewares')

const router = Router()

router.post('/', controller.postUser)

router.post('/login', controller.login)

router.post(
  '/isAuthenticated',
  middlewares.AdminAuth,
  controller.isAuthenticated,
)

router.post('/logout', controller.logout)

module.exports = router
