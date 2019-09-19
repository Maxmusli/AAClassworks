DROP TABLE IF EXISTS cats; 
DROP TABLE IF EXISTS toys;
DROP TABLE IF EXISTS cattoys; 

CREATE TABLE cats (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    color VARCHAR(255),
    breed VARCHAR(255) /*NO TRAILING COMMAS!!*/
); /*REMEMBER THE SEMICOLON!!*/

CREATE TABLE toys (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    color VARCHAR(255),
    price REAL /*NO TRAILING COMMAS!!*/
); /*REMEMBER THE SEMICOLON!!*/

CREATE TABLE cattoys (
    id SERIAL PRIMARY KEY,
    cat_id INTEGER,
    toy_id INTEGER,

    FOREIGN KEY (cat_id) REFERENCES cats(id),
    FOREIGN KEY (toy_id) REFERENCES toys(id)
);


INSERT INTO cats(name, color, breed) /*specifies the order we will be supplying values in below*/
VALUES 
  ('Fred','Yellow','Tabby'),
  ('Whiskers','Orange','Birman'),
  ('Coffee','Brown','Bombay'),
  ('Minnesota','White','American Shorthair'),
  ('Charles','Orange','British Shorthair'); /*,...; <- if you want to add more make sure you separte by commas and end list with semicolon*/

INSERT INTO toys(name, color, price)
VALUES
  ('Mouse','Purple',1.50),
  ('Laser','Red',5.00),
  ('Banana','Blue',0.50),
  ('Spring','Green',0.25),
  ('Ball', 'Pink', 15.0);

INSERT INTO cattoys(cat_id, toy_id)
VALUES
  ((SELECT id
  FROM cats
  WHERE name = 'Fred'), 
  (SELECT id
  FROM toys
  WHERE name = 'Ball')),
  ((SELECT id
  FROM cats
  WHERE name = 'Whiskers'), 
  (SELECT id
  FROM toys
  WHERE name = 'Spring')),
  ((SELECT id
  FROM cats
  WHERE name = 'Coffee'), 
  (SELECT id
  FROM toys
  WHERE name = 'Banana')),
  ((SELECT id
  FROM cats
  WHERE name = 'Minnesota'), 
  (SELECT id
  FROM toys
  WHERE name = 'Laser')),
  ((SELECT id
  FROM cats
  WHERE name = 'Charles'), 
  (SELECT id
  FROM toys
  WHERE name = 'Mouse'));

