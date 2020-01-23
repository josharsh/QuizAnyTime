-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 12, 2018 at 01:01 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `technogeek`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `1` text NOT NULL,
  `2` text NOT NULL,
  `3` text NOT NULL,
  `4` text NOT NULL,
  `5` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`1`, `2`, `3`, `4`, `5`) VALUES
('ANSWER', 'SECOND', 'THIRD', 'FOURTH', 'FIFTH');

-- --------------------------------------------------------

--
-- Table structure for table `plus_login`
--

CREATE TABLE `plus_login` (
  `id` varchar(50) NOT NULL DEFAULT '',
  `userid` varchar(40) NOT NULL DEFAULT '',
  `ip` varchar(20) NOT NULL DEFAULT '',
  `tm` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `status` char(3) NOT NULL DEFAULT 'ON'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `plus_login`
--

INSERT INTO `plus_login` (`id`, `userid`, `ip`, `tm`, `status`) VALUES
('27', 'harsh.joshi.pth@gmail.com', '::1', '2018-06-27 13:31:24', 'ON'),
('24', 'papa@gmail.com', '::1', '2018-06-27 13:36:00', 'OFF'),
('52', 'harg@gh.com', '2', '0000-00-00 00:00:00', 'ON'),
('53', 'hahhhhrg@gh.com', '2', '0000-00-00 00:00:00', 'ON'),
('28', 'user@user.com', '::1', '2018-06-27 15:50:47', 'OFF'),
('29', 'user2@gmail.com', '::1', '2018-06-27 16:10:34', 'ON'),
('30', 'user@u.com', '::1', '2018-06-27 16:54:34', 'OFF'),
('31', 'a@gmail.com', '::1', '2018-08-12 16:20:00', 'ON'),
('32', 'harsh@gmail.com', '::1', '2018-08-12 16:24:59', 'OFF'),
('33', 'a@a.com', '::1', '2018-08-12 16:28:47', 'ON');

-- --------------------------------------------------------

--
-- Table structure for table `signup`
--

CREATE TABLE `signup` (
  `userid` int(10) NOT NULL,
  `name` text NOT NULL,
  `password` varchar(15) NOT NULL,
  `email` varchar(60) NOT NULL,
  `college` text NOT NULL,
  `phone` bigint(10) NOT NULL,
  `ip` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `signup`
--

INSERT INTO `signup` (`userid`, `name`, `password`, `email`, `college`, `phone`, `ip`) VALUES
(20, 'Priyanka Yadav', '123456', '500060668@stu.upes.ac.in', 'UPES', 8954798320, 0),
(21, 'Priyanka Yadav', '123456', '500060668@stu.upes.ac.in', 'UPES', 8954798320, 0),
(22, 'harsh joshi', '123456', 'harsh.joshi.pth@gmail.com', 'UPES', 8954798320, 0),
(23, 'anurag Yadav', '123456', 'blabla@gmail.com', 'UPES', 8954798320, 0),
(24, 'papa', '123456', 'papa@gmail.com', 'UPES', 8954798320, 0),
(25, 'mumma', '123456', 'mumma@gmail.com', 'UPES', 8954798320, 0),
(26, 'aditya', '123456', 'blabla@gmail.com', 'UPES', 8954798320, 0),
(27, 'HARSH JOSHI', 'harshjoshi', 'harsh.joshi.pth@gmail.com', 'UPES', 8393822258, 0),
(28, 'user', 'useruser', 'user@user.com', 'UPES', 9897682893, 0),
(29, 'user h', 'useruser', 'user2@gmail.com', 'UPES', 9897682893, 0),
(30, 'user joshi', '123456', 'user@u.com', 'UPES', 9897682893, 0),
(31, 'HARSH JOSHI', '123456', 'a@gmail.com', 'UPES', 8393822258, 0),
(32, 'harsh', '123456', 'harsh@gmail.com', 'UPES', 9897682893, 0),
(33, 'a', 'aaaaaa', 'a@a.com', 'aaaaaa', 9879858745, 0);

-- --------------------------------------------------------

--
-- Table structure for table `updates`
--

CREATE TABLE `updates` (
  `email` varchar(40) NOT NULL,
  `1` text,
  `2` text,
  `3` text,
  `4` text,
  `5` text,
  `score` int(5) DEFAULT '0',
  `count` int(20) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `updates`
--

INSERT INTO `updates` (`email`, `1`, `2`, `3`, `4`, `5`, `score`, `count`) VALUES
('500060668@stu.upes.ac.in', 'ANSWER', 'ANSWER', 'THIRD', 'FIVE', 'FIVE', 60, 2),
('harsh.joshi.pth@gmail.com', 'AA', 'A', 'A', 'A', 'A', 0, 0),
('papa@gmail.com', 'ANSWER', 'ANSWER', 'THIRD', 'FIVE', 'FIVE', 120, 4),
('mumma@gmail.com', 'ANSWER', 'SECOND', 'THIRD', 'FIVE', 'FIVE', 120, 4),
('blabla@gmail.com', 'ANSWER', 'SECOND', 'SECOND', 'FOURTH', 'FIVE', 120, 4),
('harsh.joshi.pth@gmail.com', 'AA', 'A', 'A', 'A', 'A', 0, 0),
('user@user.com', '', NULL, NULL, NULL, NULL, 0, 0),
('user2@gmail.com', 'HARSH', 'AAAAAA', 'BBB', NULL, NULL, 0, 0),
('user@u.com', 'HARSH', 'SECOND', 'THIRD', 'FOURTH', 'ANSWER', 90, 3),
('a@gmail.com', NULL, NULL, NULL, NULL, NULL, 0, 0),
('harsh@gmail.com', 'A', 'B', 'C', 'D', 'E', 0, 0),
('a@a.com', 'A', 'SECOND', 'A', '', 'A', 30, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userid` int(10) NOT NULL,
  `email` varchar(40) NOT NULL,
  `lastlogin` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `current_level` int(5) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userid`, `email`, `lastlogin`, `current_level`) VALUES
(17, '500060668@stu.upes.ac.in', '2018-06-26 07:18:06.000000', 0),
(18, '500060668@stu.upes.ac.in', '2018-06-26 07:18:06.000000', 0),
(19, 'harsh.joshi.pth@gmail.com', '2018-08-12 10:55:52.000000', 6),
(20, 'blabla@gmail.com', '2018-06-26 12:50:26.000000', 5),
(21, 'papa@gmail.com', '2018-06-27 08:50:55.000000', 5),
(22, 'mumma@gmail.com', '2018-06-26 12:12:23.000000', 5),
(23, 'blabla@gmail.com', '2018-06-26 12:50:26.000000', 5),
(24, 'harsh.joshi.pth@gmail.com', '2018-08-12 10:55:52.000000', 6),
(25, 'user@user.com', '2018-06-27 10:44:47.000000', 2),
(26, 'user2@gmail.com', '2018-06-27 11:12:18.000000', 3),
(27, 'user@u.com', '2018-06-27 11:37:55.000000', 6),
(28, 'a@gmail.com', '2018-08-12 10:50:00.000000', 1),
(29, 'harsh@gmail.com', '2018-08-12 10:54:59.000000', 6),
(30, 'a@a.com', '2018-08-12 10:59:51.000000', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `signup`
--
ALTER TABLE `signup`
  ADD PRIMARY KEY (`userid`,`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `signup`
--
ALTER TABLE `signup`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
