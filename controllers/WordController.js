var WordModel = require('../models/WordModel');

class WordController {

    constructor() {
        this.wordModel = new WordModel();
    }

    getRows(req, res) {
        this.wordModel.ormModel.findAll().then(projects => {
            res.json(projects);
        });
    }

}

module.exports = WordController;
