const { Router } = require('express')
const controllers = require('../controllers/Itenary')

const router = Router()

router.post('/', controllers.postItenary)

module.exports = router
