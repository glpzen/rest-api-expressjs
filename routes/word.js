var express = require('express');
var router = express.Router();

var WordController = require('../controllers/WordController');

var wordController = new WordController();

/* GET words */
router.get('/', function (req, res) {
    wordController.getRows(req, res);
});

module.exports = router;
