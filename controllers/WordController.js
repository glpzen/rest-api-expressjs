var WordModel = require('../models/WordModel');

class WordController {

    constructor() {
        this.wordModel = new WordModel();
    }

    getRows(req, res) {
        this.wordModel.ormModel.findAll({
            include: [
                {model: this.wordModel.languageModel.ormModel, as: 'Language'}
            ]
        }).then(projects => {
            res.json(projects);
        });
    }

}

module.exports = WordController;
