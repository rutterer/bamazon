DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(40) NOT NULL,
  department_name VARCHAR(40) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock_quantity INT(10),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Balexa", "Electronics", 49.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 7.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Underpants", "Clothing", 10.49, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("OrangeBook Pro", "Electronics", 1299.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spatula", "Kitchenware", 5.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fork", "Kitchenware", 1.99, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("The Grapes of Wrath", "Books", 9.99, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rising Sun", "Books", 9.99, 70);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Super Mario Party", "Video Games", 59.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sid Meier's Civilization VI", "Video Games", 39.99, 25);