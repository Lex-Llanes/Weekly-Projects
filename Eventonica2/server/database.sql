--Creates tectonica database
CREATE DATABASE eventonica;


--Creates user table
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255) 
);


CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255),
    event_date VARCHAR(255),
    event_category VARCHAR(255)
);