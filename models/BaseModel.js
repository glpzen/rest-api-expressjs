class BaseModel {
    constructor() {
        this.connectDb();
    }

    connectDb() {
        var mysql = require('mysql');
        this._connection = mysql;
        this._connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'my_db'
        });
    }

    get connection() {
        return this._connection;
    }
}

module.exports = BaseModel;