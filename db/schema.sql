CREATE DATABASE burgers_db;

USE burgers_db; 

CREATE TABLE burgers(
    id INTEGER(30) PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT 0
);
