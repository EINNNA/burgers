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

    orderBurger: function (values, cb) {
        var query = "INSERT INTO burgers SET ?";

        connection.query(query, values, function (err, res) {
            if (err) {
                throw err;
            }
            else {
                cb(res);
            }
        });
    },

    eatBurger: function (id, cb) {
        var query = "UPDATE burgers SET devoured=1 WHERE id=?";

        connection.query(query, id, function (err, res) {
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