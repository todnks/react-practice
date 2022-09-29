SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS react;
SET character_set_client = utf8mb4;

CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `registerDate` datetime DEFAULT NULL,
  `loginDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `board` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`userId` int(11) NOT NULL,
	`writer` varchar(20) NOT NULL,
	`title` varchar(100) NOT NULL,
	`content` TEXT NOT NULL,
	`registerDate` datetime NOT NULL,
	`updateDate` datetime DEFAULT NULL,
	PRIMARY KEY (`id`)
);
