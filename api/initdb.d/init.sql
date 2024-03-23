CREATE DATABASE pc_specs_db;

\c pc_specs_db;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE pc_specs (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    cpu VARCHAR(255),
    gpu VARCHAR(255),
    os VARCHAR(255),
    memory_gb INTEGER,
    ssd_gb INTEGER
);

INSERT INTO users (name) VALUES ('筑波太郎'), ('筑波花子');

INSERT INTO pc_specs (user_id, cpu, gpu, os, memory_gb, ssd_gb)
VALUES 
  ((SELECT id FROM users WHERE name = '筑波太郎'), 'Intel Core i5', 'NVIDIA GeForce GTX 1650', 'Windows 10', 8, 256),
  ((SELECT id FROM users WHERE name = '筑波花子'), 'AMD Ryzen 7', 'AMD Radeon RX 6700 XT', 'Ubuntu 20.04', 16, 512),
  ((SELECT id FROM users WHERE name = '筑波太郎'), 'Intel Core i7', 'NVIDIA GeForce RTX 3080', 'macOS Catalina', 32, 1024);
