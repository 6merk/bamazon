CREATE DATABASE bamazonproducts_db;

USE bamazonproducts_db;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NULL,
  department VARCHAR(45) NULL,
  price VARCHAR(45) NULL,
  stock VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, department, price, stock)
VALUES ("iphone", "telecommunications", "500", "11");

INSERT INTO products (name, department, price, stock)
VALUES ("macbook", "computers", "1500", "33");

INSERT INTO products (name, department, price, stock)
VALUES ("ashwagandha", "herbs", "20", "10");

INSERT INTO products (name, department, price, stock)
VALUES ("yoga mat", "health and fitness", "25", "44");

INSERT INTO products (name, department, price, stock)
VALUES ("creatine", "supplements", "20", "50");

INSERT INTO products (name, department, price, stock)
VALUES ("protein powder", "supplements", "40", "30");

INSERT INTO products (name, department, price, stock)
VALUES ("box fan", "household appliances", "20", "1");

INSERT INTO products (name, department, price, stock)
VALUES ("chai tea", "food", "7", "5");

INSERT INTO products (name, department, price, stock)
VALUES ("sandals", "footwear", "13", "3");

INSERT INTO products (name, department, price, stock)
VALUES ("backpack", "luggage and storage", "30", "4");