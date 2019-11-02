var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "asdfgh",
    database: "burgers_db"
});
connection.connect(function(err) {
    if (err) {
        console.error("couldn't connect: " + err.stack);
        return;
    }
    console.log("connected as " + connection.threadId);
});

module.exports = connection;