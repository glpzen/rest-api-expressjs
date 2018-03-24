var WordModel = require('../models/WordModel');

class WordController {

    constructor() {
        this.wordModel = new WordModel();
    }

    getRows(req, res) {
        this.wordModel.getRows(function (err, result) {
            res.json(result);
        });
    }
}


module.exports = WordController;
