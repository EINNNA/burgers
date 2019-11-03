var express = require("express");
var router = express.Router();

var burgers = require("../models/burger.js");

router.get("/", function(req,res) {
    burgers.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });
});

router.post("api/burgers", function(req,res) {
    burgers.orderBurger("burger_name", req.body.burger_name, function(result) {
        res.json({id: result.insert.Id});
    });
});

router.put("api/burgers/:id",function(req,res) {
    var condition = "id = " + req.params.id;
    burgers.eatBurger("burgers", condition, function(result){
        if (result.changedRows === 0) {
            return res.status(404).end()
        }
        res.status(200).end()
    });
});

module.exports = router;