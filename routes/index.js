const { Router } = require('express')
const packageRouter = require('./Packages')
const categoryRouter = require('./Category')

const router = Router()

router.get('/', (req, res) => {
  const data = {
    message: 'Welcome to reVisiit API',
  }
  res.send(data)
})

router.all('/package', packageRouter)

router.all('/category', categoryRouter)

module.exports = router
