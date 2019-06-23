const { Router } = require('express')
const controllers = require('../controllers/Logout')

const router = Router()

router.get('/', controllers.Logout)

module.exports = router
