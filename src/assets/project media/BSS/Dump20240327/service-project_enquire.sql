-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: service-project
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `enquire`
--

DROP TABLE IF EXISTS `enquire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enquire` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `service` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `subtype` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `projectinfo` varchar(550) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `datetime` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enquire`
--

LOCK TABLES `enquire` WRITE;
/*!40000 ALTER TABLE `enquire` DISABLE KEYS */;
INSERT INTO `enquire` VALUES (23,'Vishal Sawai','9623639110','vishalsawai17252@gmail.com','Web Development','Portfolio Website',' Hello Vishal sir i need a website','2023-09-10 22:30:41'),(24,'Vishal Sawai','+919623639110','vishalsawai17252@gmail.com','Web Development','Bloging Website',' Hi Vishal','2024-01-12 00:47:48'),(28,'Vishal Sawai','9623639110','vishalsawai17252@gmail.com','graphic designing','common',' I want to design my website','2024-03-19 23:06:24'),(29,'Vishal Sawai','9623639110','vishalsawai17252@gmail.com','Graphic Design','Website Design',' Hello Guys','2024-03-19 23:14:32'),(30,'Vishal Sawai','9623639110','vishalsawai17252@gmail.com','graphic designing','common',' just checking','2024-03-19 23:22:24'),(31,'Vishal Sawai','09623639110','vishalsawai17252@gmail.com','Web Development','Other',' sadas','2024-03-19 23:23:22'),(32,'Vishal Sawai','9623639110','vishalsawai17252@gmail.com','app development','common',' Hi Guys','2024-03-19 23:25:22'),(33,'Vishal Sawai','9623639110','vishalsawai17252@gmail.com','Mobile App Development','ios',' This is my First project','2024-03-19 23:32:45'),(34,'Vishal Sawai','0962363911','vishalsawai17252@gmail.com','Web Development','Bloging Website',' I want a website','2024-03-19 23:33:25');
/*!40000 ALTER TABLE `enquire` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-27  0:22:09
