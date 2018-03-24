var User = require('../models/User');

class UserController {

    constructor() {
        this.user = new User();
    }

    getUsers(req, res) {
        this.user.all(function (err, result) {
            res.send(result);
        });
    }
}


module.exports = UserController;
