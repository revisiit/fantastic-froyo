const { Router } = require('express')
const getpackageRouter = require('./Packages')
const getcategoryRouter = require('./Category')

const router = Router()

router.get('/', (req, res) => {
  const data = {
    message: 'Welcome to reVisiit API',
  }
  res.send(data)
})

router.use('/package', getpackageRouter)

router.use('/category', getcategoryRouter)

module.exports = router
