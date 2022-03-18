--Creates tectonica database
CREATE DATABASE eventonica;


--Creates user table
CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    user_name VARChar(255),
    user_email VARCHAR(255) 
);