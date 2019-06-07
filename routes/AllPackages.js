module.exports = (app) => {
    const data = require('../controllers/AllPackages')

    app.get('/api/v1/packages', data.AllPackages);

}