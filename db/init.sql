-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS anime90s
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE anime90s;

-- Crear tabla de series
CREATE TABLE IF NOT EXISTS series (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    anio INT NOT NULL
);

-- Crear tabla de personajes
CREATE TABLE IF NOT EXISTS personajes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    rol VARCHAR(50),
    serieId INT,
    FOREIGN KEY (serieId) REFERENCES series(id) ON DELETE CASCADE
);

-- Insertar datos de series
INSERT INTO series (nombre, año) VALUES
('Dragon Ball Z', 1989),
('Sailor Moon', 1992),
('Neon Genesis Evangelion', 1995),
('Yu Yu Hakusho', 1992);

-- Insertar datos de personajes
INSERT INTO personajes (nombre, rol, serieId) VALUES
('Goku', 'Protagonista', 1),
('Vegeta', 'Antagonista', 1),
('Usagi Tsukino', 'Protagonista', 2),
('Rei Hino', 'Secundario', 2),
('Shinji Ikari', 'Protagonista', 3),
('Kurama', 'Aliado', 4),
('Yusuke Urameshi', 'Protagonista', 4);
