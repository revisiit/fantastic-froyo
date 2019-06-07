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

exports.findOnePackage = (req, res) => {

    Package.findById(req.params.packageId)
        .then(packagebyid => {
            if (!packagebyid) {
                res.send({
                    message: "Package with that id was not found " + req.params.packageId,
                })

            }
            res.send(packagebyid);

        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.send({
                    message: "Package with that id was not found " + req.params.packageId,
                })
            }
            return res.send({
                message: "Error retriveing the package with id " + req.params.packageId,
            })
        })



};

exports.Categories = (req, res) => {

    Category.SomeValue.find({}, 'name', function (err, name) {
        if (err) return (err);
        res.send(name);
    });



};

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