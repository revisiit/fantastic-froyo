const { Router } = requrie('express')
const controller = require('../controllers/Category')

const router = Router()

router.get('/', controller.getAllCategories)

router.get('/:categoryId', controller.getOneCategory)

module.exports = router
