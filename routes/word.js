var express = require('express');
var router = express.Router();

var WordController = require('../controllers/WordController');

var wordController = new WordController();


router.get('/', function (req, res) {
    wordController.getRows(req, res);
});

router.post('/', function(req, res){
    wordController.insertRows(req, res);
});

module.exports = router;
