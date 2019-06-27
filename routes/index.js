const { Router } = require('express')
const PackageRouter = require('./Packages')
const CategoryRouter = require('./Category')
const UserRouter = require('./User')
const ItenaryRouter = require('./Itenary')

const router = Router()

router.get('/', (req, res) => {
  const data = {
    message: 'Welcome to reVisiit API',
  }
  res.send(data)
})

router.use('/package', PackageRouter)

router.use('/category', CategoryRouter)

router.use('/user', UserRouter)

router.use('/itenary', ItenaryRouter)

module.exports = router
