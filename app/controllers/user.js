var Sequelize = require('sequelize');
var models = require(__dirname + '/../models');
var repositories = require('../repositories/');

exports.all = (req, res) => {
    repositories.user.all().then(response => {
        res.send(response)
    })
};

exports.store = (req, res) => {
    models.User.create(req.body).then(response => {
            res.send(response)
        })
        .catch(Sequelize.ValidationError, err => {
            res.send(err)
        })
        .catch(err => {
            res.send(err)
        });
};

exports.show = (req, res) => {
    repositories.user.find(req.params.id).then(response => {
        res.send(response)
    })
};

exports.update = (req, res) => {
    repositories.user.find(req.params.id).then(user => {
        user.update(req.body).then(response => {
                res.send(response)
            })
            .catch(Sequelize.ValidationError, err => {
                res.send(err)
            })
            .catch(err => {
                res.send(err)
            });
    })
};

exports.destroy = (req, res) => {
    repositories.user.find(req.params.id).then(response => {
        if (response) response.destroy();
        res.send(response)
    })
};