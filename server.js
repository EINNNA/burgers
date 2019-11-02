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

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "asdfgh",
    database: "burgers"
});

connection.connect(function(err) {
    if (err) {
        console.error("couldn't connect: " + err.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});