const { Router } = require('express')
const PackageRouter = require('./Packages')
const CategoryRouter = require('./Category')
const UserRouter = require('./User')
const ItenaryRouter = require('./Itenary')
const middlewares = require('./middlewares')

const router = Router()

/**
 * Just showing you an example how you can keep chaining middelwares.
 *  And we should always keep midddlewares before route controllers.
 * delete this when you need
 */
router.all('/', middlewares.hello, middlewares.time, (req, res) => {
  const data = {
    message: 'Welcome to reVisiit API',
  }
  res.send(data)
})

router.use('/package', middlewares.log, PackageRouter)

router.use('/category', middlewares.log, CategoryRouter)

router.use('/user', middlewares.log, UserRouter)

router.use('/itenary', middlewares.log, ItenaryRouter)

module.exports = router
