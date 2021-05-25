DROP DATABASE IF EXISTS user_db;

CREATE DATABASE user_db;

CREATE TABLE users (
    PersonID int,
    lastName varchar(255),
    firstName varchar(255),
    username varchar(255),
    password varchar(255),
    email varchar(255),
    userCreated Date.now,    
);

CREATE TABLE (
    
);