const { Router } = require('express')
const controller = require('../controllers/Category')

const router = Router()

router.get('/all', controller.AllCategories)

router.get('/:categoryId', controller.OneCategory)

module.exports = router
