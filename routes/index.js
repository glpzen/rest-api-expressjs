var express = require('express');
var router = express.Router();

var UserController = require('../controllers/UserController');

var userController = new UserController();

/* GET users */
router.get('/', function (req, res) {
    userController.getUsers(req, res);
});

module.exports = router;
