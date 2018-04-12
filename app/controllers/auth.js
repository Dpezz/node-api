var jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    config = require(__dirname + '/../config'),
    models = require(__dirname + '/../models'),
    repositories = require(__dirname + '/../repositories/');

exports.token = function (req, res) {
    repositories.user.findByEmail(req.body.email).then(user => {
        if (!user) {
            res.send({
                message: 'Authentication failed. User not found.'
            });
        } else if (user) {
            if (!bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                return res.send({
                    token: jwt.sign({
                        email: user.email,
                        firstName: user.firstName,
                        id: user.id,
                    }, config.secret, {
                        expiresIn: "7d",
                    })
                });
            }
        }
    });
};

exports.show = function (req, res) {
    var authorization = req.headers['authorization'];
    var token = authorization ? authorization.replace('Bearer ', '') : null;
    // decode token
    if (token) {
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                res.send(decoded);
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
};