const { Router } = requrie('express')
const controller = require('../controllers/Packages')

const router = Router()

router.get('/', controller.getAllPackages)

router.get('/:packageId', controller.getOnePackage)

module.exports = router
