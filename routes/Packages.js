const { Router } = require('express')
const controller = require('../controllers/Package')
const middlewares = require('./middlewares')

const router = Router()

router.get('/all', controller.getAllPackages)

router.get('/:slug', controller.getOnePackage)

router.post('/', controller.postPackage)

module.exports = router
