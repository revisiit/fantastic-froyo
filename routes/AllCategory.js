module.exports = (app) => {
    const data = require('../controllers/AllCategory')

    app.get('/api/v1/category', data.AllCategories);

}