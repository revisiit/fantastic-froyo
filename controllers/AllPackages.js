const User = require('../models/User');
const Package = require('../models/Package');
const Iternary = require('../models/Iternary');
const Category = require('../models/Category');

exports.AllPackages = (req, res) => {
    Package.find()
        .then(packages => {
            res.send(packages);
        }).catch(err => {
            res.send({
                message: err.message,
            })
        })

};