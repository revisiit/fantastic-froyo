module.exports = app => {
  const data = require('../controllers/Packages')

  app.get('/api/v1/packages/:packageId', data.findOnePackage)

  app.get('/api/v1/packages', data.AllPackages)
}
