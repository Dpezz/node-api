var models = require(__dirname + '/../models');

exports.all = () => {
    return models.User.findAll();
};

exports.find = (id) => {
    return models.User.findById(id);
};

exports.findByEmail = (value) => {
    return models.User.findOne({
        where: {
            email: value
        }
    });
};