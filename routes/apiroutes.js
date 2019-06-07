module.exports = (app) => {
    const data = require('../controllers/apicontroller')

    app.get('/packages', data.AllPackages);

    app.get('/packages/:packageId', data.findOnePackage);

    app.get('/categories', data.Categories);

    app.get('/category', data.AllCategories);

}