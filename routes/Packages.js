const { Router } = require('express')
const controller = require('../controllers/Package')

const router = Router()

router.get('/all', controller.getAllPackages)

router.get('/:packageId', controller.getOnePackage)

router.post('/post', controller.postPackage)

module.exports = router
