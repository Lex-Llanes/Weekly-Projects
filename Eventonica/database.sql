-- Create a database called Eventonica 
CREATE DATABASE Eventonica;


-- Create a table for Users
--     we use the data type -serial- in order to create an auto incrementing integer id
CREATE TABLE users (
id serial PRIMARY KEY,
name VARCHAR ( 50 ) UNIQUE NOT NULL,
email VARCHAR ( 50 ) UNIQUE NOT NULL
);

