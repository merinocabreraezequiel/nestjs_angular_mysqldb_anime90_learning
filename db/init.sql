-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.22-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para anime90s
CREATE DATABASE IF NOT EXISTS `anime90s` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `anime90s`;

-- Volcando estructura para tabla anime90s.personajes
CREATE TABLE IF NOT EXISTS `personajes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rol` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `serieId` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `serieId` (`serieId`),
  CONSTRAINT `personajes_ibfk_1` FOREIGN KEY (`serieId`) REFERENCES `series` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla anime90s.personajes: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `personajes` DISABLE KEYS */;
INSERT INTO `personajes` (`id`, `nombre`, `rol`, `serieId`, `createdAt`, `updatedAt`) VALUES
	(1, 'Goku', 'Protagonista', 1, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(2, 'Vegeta', 'Antagonista', 1, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(3, 'Usagi Tsukino', 'Protagonista', 2, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(4, 'Rei Hino', 'Secundario', 2, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(5, 'Shinji Ikari', 'Protagonista', 3, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(6, 'Kurama', 'Aliado', 4, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(7, 'Yusuke Urameshi', 'Protagonista', 4, '2025-09-05 11:18:51', '2025-09-05 11:18:51');
/*!40000 ALTER TABLE `personajes` ENABLE KEYS */;

-- Volcando estructura para tabla anime90s.series
CREATE TABLE IF NOT EXISTS `series` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `anio` int(11) NOT NULL,
  `createdAt` datetime DEFAULT current_timestamp(),
  `updatedAt` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla anime90s.series: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `series` DISABLE KEYS */;
INSERT INTO `series` (`id`, `nombre`, `anio`, `createdAt`, `updatedAt`) VALUES
	(1, 'Dragon Ball Z', 1989, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(2, 'Sailor Moon', 1992, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(3, 'Neon Genesis Evangelion', 1995, '2025-09-05 11:18:51', '2025-09-05 11:18:51'),
	(4, 'Yu Yu Hakusho', 1992, '2025-09-05 11:18:51', '2025-09-05 11:18:51');
/*!40000 ALTER TABLE `series` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
