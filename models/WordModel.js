var BaseModel = require('./BaseModel');
var LanguageModel = require('./LanguageModel');
const Sequelize = require('sequelize');

class WordModel extends BaseModel {

    constructor() {
        super();
        this.ormModel = this.sequelize.define('words', {
            language_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: 'The language_id is required!'
                    },
                    isNumeric: {
                        args: true,
                        msg: "The language_id has to be numeric."
                    }
                }
            },
            text: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "The text is required!"
                    }
                }
            }
        });

        this.setRelations();
    }

    setRelations() {
        this.languageModel = new LanguageModel();
        this.synonymModel = this.sequelize.define('word_word', {
            x_word_id: {
                type: Sequelize.INTEGER
            },
            y_word_id: {
                type: Sequelize.INTEGER
            }
        });

        this.ormModel.belongsTo(this.languageModel.ormModel, {as: 'Language', foreignKey: 'language_id'});
        this.ormModel.belongsToMany(this.ormModel, {
            as: 'SynonymX',
            through: this.synonymModel,
            foreignKey: 'x_word_id'
        });
        this.ormModel.belongsToMany(this.ormModel, {
            as: 'SynonymY',
            through: this.synonymModel,
            foreignKey: 'y_word_id'
        });

    }

}

module.exports = WordModel;
