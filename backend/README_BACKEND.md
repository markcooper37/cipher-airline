# To understand the sections, structure, thought process of this project, please go through the comments in commit history. 

Airline is a backend project for bnt, it consists of Java, SpringBoot JPA Repository, Hibernate hence the use the CRUD repository and Postgres SQL was used as a database.
Data can be manipulated through the CLI terminal. 
The project allows employees to sign in, add/delete countries, add/delete/change employees add/delete customers.
Customers can book, change and cancel their flights. 


To test:

Please ensure in application.properties, the localhost is changed to 5432 if you're using your default settings

The tables are as follows: 

database is airline

CREATE TABLE customer(id SERIAL PRIMARY KEY NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, dob DATE NOT NULL, age INT, passport VARCHAR(255) NOT NULL);

CREATE TABLE country(id SERIAL PRIMARY KEY NOT NULL, country_name VARCHAR(255) NOT NULL, estimated_travel INT NOT NULL, price DECIMAL NOT NULL, time_departure TIMESTAMPTZ, time_arrival TIMESTAMPTZ, flight_number VARCHAR(255) NOT NULL);

CREATE TABLE employee(id SERIAL PRIMARY KEY NOT NULL, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, national_insurance_number VARCHAR(255) NOT NULL UNIQUE, current_employee BOOLEAN);

CREATE TABLE flight(id SERIAL PRIMARY KEY NOT NULL, country_id INT NOT NULL, customer_id INT NOT NULL,  return_ticket BOOL, return_time_departure TIMESTAMPTZ, return_time_arrival TIMESTAMPTZ, number_of_passengers INT NOT NULL, total_price DECIMAL NOT NULL, customer_flight_number VARCHAR(255) NOT NULL);

