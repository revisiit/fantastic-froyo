const { Router } = require('express')
const controller = require('../controllers/Packages')

const router = Router()

router.get('/all', controller.getAllPackages)

router.get('/:packageId', controller.getOnePackage)

module.exports = router
