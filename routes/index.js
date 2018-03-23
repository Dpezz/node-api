var express = require('express'),
    router = express.Router(),
    ctrl = require(__dirname + '/../app/'),
    mw = require(__dirname + '/../app/middleware/auth');

// index
router.get('/', function (req, res) {
    res.send('welcome to api!')
})

// auth
router.post('/auth', ctrl.auth.token)

// ::: middleware ::: //
router.use(mw.auth)

// auth
router.get('/auth', ctrl.auth.show)

// Users
router.get('/users', ctrl.user.all)
router.post('/users', ctrl.user.store)
router.get('/users/:id', ctrl.user.show)
router.put('/users/:id', ctrl.user.update)
router.delete('/users/:id', ctrl.user.destroy)

module.exports = router