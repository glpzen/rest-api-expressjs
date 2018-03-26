var BaseModel = require('./BaseModel');
var LanguageModel = require('./LanguageModel');
const Sequelize = require('sequelize');

class WordModel extends BaseModel {

    constructor() {
        super();
        this.ormModel = this.sequelize.define('words', {
            language_id: Sequelize.INTEGER,
            text: Sequelize.STRING
        });

        this.setRelations();
    }

    setRelations() {
        this.languageModel = new LanguageModel();
        this.ormModel.belongsTo(this.languageModel.ormModel, {as: 'Language', foreignKey: 'language_id'});
    }

}

module.exports = WordModel;
