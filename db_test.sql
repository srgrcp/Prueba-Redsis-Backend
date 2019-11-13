/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 5.6.44-log : Database - db_test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_test` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;

USE `db_test`;

/*Table structure for table `accidente` */

DROP TABLE IF EXISTS `accidente`;

CREATE TABLE `accidente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `empleado` int(11) NOT NULL,
  `gravedad` int(11) NOT NULL,
  `fecha` datetime NOT NULL,
  `lugar` text COLLATE utf8_spanish_ci NOT NULL,
  `tipo` int(11) NOT NULL,
  `lesion` int(11) NOT NULL,
  `parte` int(11) NOT NULL,
  `agente` int(11) NOT NULL,
  `mecanismo` int(11) NOT NULL,
  `descripcion` text COLLATE utf8_spanish_ci NOT NULL,
  `incapacidad` tinyint(4) NOT NULL,
  `diasincapacidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `accidente` */

insert  into `accidente`(`id`,`empleado`,`gravedad`,`fecha`,`lugar`,`tipo`,`lesion`,`parte`,`agente`,`mecanismo`,`descripcion`,`incapacidad`,`diasincapacidad`) values 
(1,2,5,'2019-11-13 12:11:00','qwerty',3,10,5,6,9,'asdfgh',0,NULL),
(2,1,3,'2019-11-08 11:11:00','qwert',2,3,3,4,2,'123er',0,NULL),
(3,2,3,'2019-11-08 19:34:00','wefgh',3,3,2,5,4,'wergh',0,NULL),
(4,1,4,'2019-11-09 14:11:00','xzcds',3,3,4,2,5,'yhtgrfed',0,NULL),
(5,1,3,'2019-11-09 00:22:00','edfsd',3,4,3,6,3,'mgf',0,NULL),
(6,1,4,'2019-11-13 11:11:00','ergfgf',4,13,6,3,3,'hgsrfdg',0,NULL),
(7,1,2,'2019-11-10 11:11:00','hetgnfgb',5,1,3,3,6,'thgfv',1,3),
(8,1,3,'2019-11-10 14:22:00','awdfvfg',4,2,5,4,4,'vsf',0,NULL);

/*Table structure for table `empleado` */

DROP TABLE IF EXISTS `empleado`;

CREATE TABLE `empleado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` bigint(20) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `correo` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `nacimiento` date NOT NULL,
  `sexo` tinyint(4) NOT NULL,
  `area` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `cargo` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `ingreso` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `empleado` */

insert  into `empleado`(`id`,`cedula`,`nombre`,`correo`,`nacimiento`,`sexo`,`area`,`cargo`,`ingreso`) values 
(1,12345,'Rafael Perez','raf@ael.per','1995-11-01',2,'Comercial','Cajero','2019-11-08'),
(2,98765,'Sergio Carrillo','ser@gio.com','1995-06-08',2,'Administrativo','Administrador','2019-11-01');

/*Table structure for table `imagen` */

DROP TABLE IF EXISTS `imagen`;

CREATE TABLE `imagen` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `accidente` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `imagen` */

insert  into `imagen`(`id`,`nombre`,`accidente`) values 
(1,'6cdfffc8593e9f728a1f3ae9ac3eafe9.jpg',8),
(2,'67dee33cf9d27c0761bb5ac38335ffca.jpg',8);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
