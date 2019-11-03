var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    eatBurger: function(table, id, cb) {
        orm.eatBurger(table, id), function(res) {
            cb(res);
        };
    },
    orderBurger: function(table, burger_name, cb){
        orm.eatBurger("burgers", burger_name), function(res) {
            cb(res);
        }
    }
};

module.exports = burgers;