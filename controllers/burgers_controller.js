var express = require("express");
var router = express.Router();
var orm = require("../config/orm");
var burgers = require("../models/burger.js");

router.get("/", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log('hbs object',hbsObject);
        res.render("index", hbsObject)
    });
});

//ORDER BURGER
router.post("/api/burgers", function (req, res) {
    console.log(req.body)
    orm.orderBurger({
        "burger_name": req.body.burger_name
    }, function (result) {
        res.json({ id: result.insertId });
    });
});

//EATING BURGER
router.put("/api/burgers/:id", function (req, res) {
    var id = req.params.id;
    console.log(id);
    orm.eatBurger(id, function (result) {
            if (result.changedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

module.exports = router;