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

    insertRows(req, res){
        this.wordModel.ormModel.create(req.body).then(task => {
            res.json(task);
        });
    }

}

module.exports = WordController;
