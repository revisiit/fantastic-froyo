const { Router } = require('express')
const packageRouter = require('./Packages')
const categoryRouter = require('./Category')

const router = Router()

router.all('/packages', packageRouter)

router.all('/categories', categoryRouter)

module.export = router
