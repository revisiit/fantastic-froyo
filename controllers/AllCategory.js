const User = require('../models/User');
const Package = require('../models/Package');
const Iternary = require('../models/Iternary');
const Category = require('../models/Category');

exports.AllCategories = (req, res) => {
    Category.find()
        .then(allcategory => {
            res.send(allcategory);
        }).catch(err => {
            res.send({
                message: err.message,
            })
        })

};