CREATE DATABASE bookstore;
USE bookstore;

CREATE TABLE books(
    id     INT AUTO_INCREMENT PRIMARY KEY,
    title  VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    price  DECIMAL(10,2) NOT NULL,
    stock  INT NOT NULL DEFAULT 0
);

CREATE TABLE customers (
    id    INT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE orders (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT NOT NULL,
    book_id     INT NOT NULL,
    quantity    INT NOT NULL
);

SHOW TABLES;
DESCRIBE books;

INSERT INTO books (title, author, price, stock) VALUES
  ('Clean Code','Robert C. Martin',520,8),
  ('The Pragmatic Programmer','Andrew Hunt',610,5),
  ('Refactoring','Martin Fowler',700,3),
  ('Database Internals','Alex Petrov',850,4),
  ('SQL in 10 Minutes','Ben Forta',300,12),
  ('Designing Data-Intensive Applications','Martin Kleppmann',950,6),
  ('Head First SQL','Lynn Beighley',420,9),
  ('Learning MySQL','Seyed Tahaghoghi',640,2),
  ('Patterns of Enterprise Application Architecture','Martin Fowler',880,3),
  ('MySQL Crash Course','Ben Forta',360,10);

INSERT INTO customers (name, email) VALUES
  ('Pim','pim@example.com'),('Nate','nate@example.com'),
  ('Som','som@example.com'),('Lek','lek@example.com');

INSERT INTO orders (customer_id, book_id, quantity) VALUES
  (1,1,1),(1,5,2),(2,3,1),(2,6,1),(3,2,3),(4,4,1),(4,7,2);
  
  INSERT INTO books (title, author, price, stock) VALUES
  ('He Snores', 'Pinya S', 240, 7),
  ('I cant do this', 'Dogs and Cats', 480, 5);
  
  SELECT * FROM books;
  
  SELECT title, price
FROM books
WHERE price > 500;

SELECT DISTINCT author
FROM books;

SELECT *
FROM customers
WHERE name LIKE 'P%'
ORDER BY name;

SELECT title, price
FROM books
WHERE price BETWEEN 400 AND 700
ORDER BY price;

SELECT title, author
FROM books
WHERE author IN ('Martin Fowler', 'Ben Forta')
ORDER BY title;

SELECT
    COUNT(*)      AS num_books,
    SUM(stock)    AS total_stock,
    AVG(price)    AS avg_price
FROM books;

SELECT author, COUNT(*) AS num_books
FROM books
GROUP BY author
HAVING COUNT(*) > 1;

SELECT title, price, ROUND(price * 1.07, 2) AS price_with_vat
FROM books;

SELECT
    ABS(-42)          AS abs_example,
    POWER(2, 10)       AS power_example,
    SQRT(144)          AS sqrt_example;
    
    SELECT VERSION();
SELECT NOW();

SELECT CONCAT(title, ' - ', author) AS label
FROM books;

UPDATE books
SET price = price * 1.10
WHERE id = 1;

-- Step 1: confirm what will be deleted
SELECT * FROM orders WHERE id = 7;

-- Step 2: delete it once you've confirmed it's the right row
DELETE FROM orders WHERE id = 7;

ALTER TABLE orders
ADD CONSTRAINT fk_orders_book
FOREIGN KEY (book_id) REFERENCES books(id);

INSERT INTO orders (customer_id, book_id, quantity)
VALUES (1, 999, 1);

CREATE INDEX idx_orders_customer_id
ON orders(customer_id);

SELECT
    c.name  AS customer_name,
    b.title AS book_title,
    o.quantity
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN books b     ON o.book_id = b.id
ORDER BY b.title;

SELECT
    c.name  AS customer_name,
    b.title AS book_title,
    o.quantity
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
INNER JOIN books b     ON o.book_id = b.id
WHERE c.id = 1
ORDER BY b.title;
-- SET FOREIGN_KEY_CHECKS = 0;   -- temporarily disable FK checks

-- TRUNCATE TABLE orders;
-- TRUNCATE TABLE books;
-- TRUNCATE TABLE customers;

-- SET FOREIGN_KEY_CHECKS = 1;