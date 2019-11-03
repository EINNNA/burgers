var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        var query = "SELECT * FROM" + tableInput + ";";
        connection.query(query, function(err, res) {
            if (err) {
                throw err;
            }
                cb(res);
        });
    },

    orderBurger: function(table, id) {
        var query = "INSERT INTO ?? WHERE;
        connection.query(query, function(err,res) {
            if(err) {
                throw err;
            };
        });
    },

    eatBurger: function(table, id) {
        var query = "UPDATE ?? SET eaten = 1 WHERE id = ?";
        connection.query(query, [table, id], function(err,res) {
                if (err) throw err;
        });
    }
};

module.exports = orm;