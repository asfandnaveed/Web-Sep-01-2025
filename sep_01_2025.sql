-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 07, 2025 at 05:23 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sep_01_2025`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin', 'admin@gmail.com', '123456', '2025-11-06 14:43:45', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `price` int(11) NOT NULL,
  `sku` varchar(35) NOT NULL,
  `description` text NOT NULL,
  `stock` int(11) NOT NULL,
  `image_url` varchar(150) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `sku`, `description`, `stock`, `image_url`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Coffee Latte', 1050, 'cf-123', 'Roasted Coffee Latte', 40, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-', '2025-10-15 17:25:24', '2025-10-22 07:02:33', NULL),
(2, 'Fires', 50, 'fri_12', 'Crunchy Masala Fries', 30, 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?ixlib=rb-4.1.0&ixid=M3', '2025-10-22 15:59:15', NULL, NULL),
(3, 'Pizza', 2200, 'pz_112', 'Love at first bite !!', 30, '', '2025-10-22 07:30:21', NULL, NULL),
(4, 'Fillet Burger', 800, 'bur_123', 'Enrich with flaours', 400, ' ', '2025-11-07 19:38:51', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `dob` date NOT NULL,
  `address` text NOT NULL,
  `phone_no` varchar(13) NOT NULL,
  `gender` varchar(6) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `dob`, `address`, `phone_no`, `gender`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Ali Khan', 'ali.khan@example.com', 'password123', '1995-04-12', 'Lahore, Pakistan', '+923001234567', 'Male', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(2, 'Sara Ahmed', 'sara.ahmed@example.com', 'sara@123', '1998-09-25', 'Karachi, Pakistan', '+923331112233', 'Female', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(3, 'John Doe', 'john.doe@example.com', 'john2024', '1990-01-05', 'Islamabad, Pakistan', '+923445556667', 'Male', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(4, 'Fatima Noor', 'fatima.noor@example.com', 'fatima@noor', '1999-07-19', 'Multan, Pakistan', '+923127778889', 'Female', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(5, 'Ahmed Raza', 'ahmed.raza@example.com', 'ahmed@raza', '1993-03-10', 'Faisalabad, Pakistan', '+923009991111', 'Male', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(6, 'Ayesha Malik', 'ayesha.malik@example.com', 'ayesha2024', '1997-12-02', 'Rawalpindi, Pakistan', '+923214445555', 'Female', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(7, 'Bilal Hussain', 'bilal.hussain@example.com', 'bilal@321', '1988-06-22', 'Quetta, Pakistan', '+923155667788', 'Male', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(8, 'Mehwish Iqbal', 'mehwish.iqbal@example.com', 'mehwish@iq', '1994-08-15', 'Peshawar, Pakistan', '+923224443333', 'Female', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(9, 'Usman Tariq', 'usman.tariq@example.com', 'usman@t', '1991-11-09', 'Hyderabad, Pakistan', '+923111112222', 'Male', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(10, 'Zara Ali', 'zara.ali@example.com', 'zara@ali', '2000-02-14', 'Sialkot, Pakistan', '+923006667777', 'Female', '2025-10-27 20:17:26', '2025-10-27 20:17:26', NULL),
(11, 'Faisal', 'fasil@gmail.com', '123456', '1965-10-29', 'Lahore , Pakistan', '+9213123414', 'male', '2025-10-28 20:39:01', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
