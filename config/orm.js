var connection = require("./connection.js");

var orm = {
    all: function (tableInput, cb) {
        var query = "SELECT * FROM " + tableInput + ";";
        connection.query(query, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },

    orderBurger: function (cols, vals, id, cb) {
        var query = "INSERT INTO burgers SET (??) VALUES (?) WHERE (?)";
        connection.query(query, [cols, vals, id], function (err, res) {
            if (err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    },

    eatBurger: function (cols, id, cb) {
        var query = "UPDATE burgers SET(?) WHERE (?)";
        connection.query(query, [cols, id], function (err, res) {
            if (err) {
                throw err;
            }
            else {
            cb(res);
            }
        });
    }
};

module.exports = orm;