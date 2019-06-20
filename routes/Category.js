const { Router } = require('express')
const controller = require('../controllers/Category')

const router = Router()

router.get('/all', controller.getAllCategories)

router.get('/:categoryId', controller.getOneCategory)

router.post('/post', controller.postCategory)

module.exports = router
