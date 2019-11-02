var express = require("express");
var expresshand = require("express");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", expresshands({ defaultLayout:"main"}));
app.set("view engine", "handlebars");

var route = require("./controllers/burgers_controller");
app.use(route);

app.listen(PORT, function() {
    console.log("listening at" + PORT);
});