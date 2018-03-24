var BaseModel = require('./BaseModel');

class WordModel extends BaseModel {

    constructor() {
        super()
    }

    getRows(callback) {
        super.connection.query('SELECT * FROM words', function (err, rows, fields) {
            if (err) {
                callback(0, null)
            }
            callback(1, rows);

        });
    }

}

module.exports = WordModel;
