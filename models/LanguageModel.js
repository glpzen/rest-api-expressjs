var BaseModel = require('./BaseModel');
const Sequelize = require('sequelize');

class LanguageModel extends BaseModel {

    constructor() {
        super();
        this.ormModel = this.sequelize.define('languages', {
            text: Sequelize.STRING
        });

    }

}

module.exports = LanguageModel;
