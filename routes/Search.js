const { Router } = require('express')
const controller = require('../controllers/Search')

const router = Router()

router.post('/', controller.searchItem)

module.exports = router
