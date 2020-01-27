DROP DATABASE IF EXISTS lgll69tw2lvj1v8t;
CREATE DATABASE lgll69tw2lvj1v8t;

USE lgll69tw2lvj1v8t;
CREATE TABLE burgers(
id INTEGER NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(30) NOT NULL,
devoured boolean,
createdAt timestamp NOT NULL,
primary key (id)
);
