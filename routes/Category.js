module.exports = (app) => {
    const data = require('../controllers/Category')

    app.get('/api/v1/categories', data.Categories);

}