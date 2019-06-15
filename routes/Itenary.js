const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/Itenary')

router.post('/', controllers.postItenary)
