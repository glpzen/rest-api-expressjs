var BaseModel = require('./BaseModel');

class User extends BaseModel {

    constructor() {
        super()
    }

    all(callback) {
        super.connection.query('SELECT * FROM users', function (err, rows, fields) {
            if (err) {
                callback(0, null)
            }
            callback(1, rows);

        });
    }

}

module.exports = User;
