class BaseModel {

    constructor() {
        this.connectDb();
    }

    connectDb() {
        const Sequelize = require('sequelize');
        this.sequelize = new Sequelize('my_db', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
    }
}

module.exports = BaseModel;