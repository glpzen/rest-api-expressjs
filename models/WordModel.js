var BaseModel = require('./BaseModel');
const Sequelize = require('sequelize');

class WordModel extends BaseModel {

    constructor() {
        super();
        this.wordModel = this.sequelize.define('words', {
            text: Sequelize.STRING
        });
    }

    getRows(callback) {
        this.wordModel.findAll().then(projects => {
            callback(1, projects);
        });
    }

}

module.exports = WordModel;
