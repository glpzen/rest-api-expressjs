var BaseModel = require('./BaseModel');
const Sequelize = require('sequelize');

class WordModel extends BaseModel {

    constructor() {
        super();
        this.ormModel = this.sequelize.define('words', {
            text: Sequelize.STRING
        });
    }

}

module.exports = WordModel;
