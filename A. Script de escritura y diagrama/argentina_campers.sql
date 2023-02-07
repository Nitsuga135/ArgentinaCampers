-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-08-2022 a las 22:38:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `argentina_campers`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito`
--

CREATE TABLE `carrito` (
  `id` int(11) NOT NULL,
  `usuarios_id` int(11) NOT NULL,
  `productos_id` int(11) NOT NULL,
  `fechaPartida` varchar(45) NOT NULL,
  `fechaLlegada` varchar(45) NOT NULL,
  `cantidadDeDias` int(11) NOT NULL,
  `precioTotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carrito`
--

INSERT INTO `carrito` (`id`, `usuarios_id`, `productos_id`, `fechaPartida`, `fechaLlegada`, `cantidadDeDias`, `precioTotal`) VALUES
(41, 59, 3, '2022-07-15', '2022-07-20', 5, 125000),
(118, 1, 1, '2022-08-12', '2022-08-15', 3, 45000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `destino` varchar(45) NOT NULL,
  `rating` varchar(5) NOT NULL,
  `experiencia` varchar(45) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `descripcion` longtext NOT NULL,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `destino`, `rating`, `experiencia`, `titulo`, `descripcion`, `id_usuario`) VALUES
(1, 'La ruta del vino, Mendoza', '★★★★', 'Gran experiencia', 'Una aventura por el norte', 'Con mi pareja realizamos la ruta de los vinos con la Citröen Jumpy. La atención de Martín y Horacio fue realmente excelente, no tuvimos mayores inconvenientes, pero los que tuvimos nos los pudieron resolver con rapidez.', 59),
(2, 'Neuquen', '★★★★', 'Gran experiencia', 'Viaje de relax', 'Una escapadita nunca le viene mal a nadie. Yo la hice con la Renault Kangoo. Todas las comodidades necesarias para viajar comodo y relajado.', 1),
(3, 'Tierra del fuego, Usuahia', '★★★★★', 'Experiencia única', 'Camper Van de lujo', 'Viajé con 3 amigos en la Toyota Hiace y fue una aventura en todo momento, completamente recomendado. Fue una experiencia tremenda y completamente recomendable', 1),
(11, 'Catamarca', '', 'Gran experiencia', 'Aguante boca', 'Hola a todos', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `id` int(11) NOT NULL,
  `provincia_id` int(2) NOT NULL,
  `municipio` varchar(100) NOT NULL,
  `ciudad` varchar(100) NOT NULL,
  `calle` varchar(100) NOT NULL,
  `numeroVivienda` int(11) NOT NULL,
  `codigoPostal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`id`, `provincia_id`, `municipio`, `ciudad`, `calle`, `numeroVivienda`, `codigoPostal`) VALUES
(14, 4, 'Moron', 'Castelar', 'Martin', 13, 1123),
(16, 1, 'La matanza', 'Ciudad evita', 'Maradona', 10, 11111),
(20, 1, 'La matanza', 'Evita', 'Messi', 13, 1778);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado`
--

CREATE TABLE `estado` (
  `id` int(11) NOT NULL,
  `estado` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estado`
--

INSERT INTO `estado` (`id`, `estado`) VALUES
(1, 'Disponible'),
(2, 'No disponible'),
(3, 'En mantenimiento');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE `genero` (
  `id` int(11) NOT NULL,
  `genero` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genero`
--

INSERT INTO `genero` (`id`, `genero`) VALUES
(1, 'Masculino'),
(2, 'Femenino'),
(3, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `marca` varchar(45) NOT NULL,
  `modelo` varchar(45) NOT NULL,
  `color` varchar(100) NOT NULL,
  `descripcion` text NOT NULL,
  `capacidad` int(11) NOT NULL,
  `precioDia` decimal(45,2) NOT NULL,
  `ultimoService` date NOT NULL,
  `antiguedad` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL DEFAULT 1,
  `estadoProducto` tinyint(1) NOT NULL DEFAULT 1,
  `ventas` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `marca`, `modelo`, `color`, `descripcion`, `capacidad`, `precioDia`, `ultimoService`, `antiguedad`, `stock`, `estado_id`, `estadoProducto`, `ventas`) VALUES
(1, 'Renault', 'Kangoo', 'Azul', 'Nuestra Camper Van con una capacidad de 2 personas adultas, para recorrer los más bellos paisajes de la Argentina de forma práctica, compacta y cómoda. Renaul Kangoo, creada para aventureros.', 2, '15000.00', '2022-07-21', 2010, 12, 1, 1, 5),
(2, 'Citröen', 'Jumpy', 'Blanco', 'Esta Camper Van tiene una capacidad de dos adultos y un menor, la cuál brinda extrema comodidad y seguridad para viajar por toda la Argentina en un vehículo ampliamente confortable para manejar y viajar.', 3, '20000.00', '2020-01-01', 2011, 1, 1, 1, 1),
(3, 'Toyota', 'Hiace', 'Gris', 'La Camper Hiace fue la última incorporación de nuestra empresa y es realmente espectacular. Cuenta con capacidad para que viajen 4 personas extremadamente cómodas, es lo más parecido a un hotel con ruedas que veras en mucho tiempo.', 4, '25000.00', '2021-01-01', 2016, 3, 1, 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos_imagenes`
--

CREATE TABLE `productos_imagenes` (
  `id` int(11) NOT NULL,
  `img` varchar(100) NOT NULL,
  `producto_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos_imagenes`
--

INSERT INTO `productos_imagenes` (`id`, `img`, `producto_id`) VALUES
(1, 'kangoo.png', 1),
(15, 'citroenjumpy.png', 2),
(16, 'toyotahiace.png', 3),
(17, 'kangoofrente.png', 1),
(18, 'kangoodentro.png', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provincia`
--

CREATE TABLE `provincia` (
  `id` int(11) NOT NULL,
  `provincia` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `provincia`
--

INSERT INTO `provincia` (`id`, `provincia`) VALUES
(1, 'Buenos Aires'),
(2, 'Buenos Aires Capital'),
(3, 'Catamarca'),
(4, 'Chaco'),
(5, 'Chubut'),
(6, 'Cordoba'),
(7, 'Corrientes'),
(8, 'Entre Rios'),
(9, 'Formosa'),
(10, 'Jujuy'),
(11, 'La Pampa'),
(12, 'La Rioja'),
(13, 'Mendoza'),
(14, 'Misiones'),
(15, 'Neuquen'),
(16, 'Rio Negro'),
(17, 'Salta'),
(18, 'San Juan'),
(19, 'San Luis'),
(20, 'Santa Cruz'),
(21, 'Santa Fe'),
(22, 'Santiago del Estero'),
(23, 'Tierra del Fuego'),
(24, 'Tucuman');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `userName` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `emailRespaldo` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `birthday` varchar(45) NOT NULL,
  `dni` int(11) NOT NULL,
  `genero_id` int(11) NOT NULL,
  `phoneNumber` varchar(13) NOT NULL,
  `phoneNumberRespaldo` varchar(13) NOT NULL,
  `typeOfUser` tinyint(1) NOT NULL,
  `direccion_id` int(11) NOT NULL,
  `estadoCuenta` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `firstName`, `lastName`, `userName`, `email`, `emailRespaldo`, `password`, `avatar`, `birthday`, `dni`, `genero_id`, `phoneNumber`, `phoneNumberRespaldo`, `typeOfUser`, `direccion_id`, `estadoCuenta`) VALUES
(1, 'Francisco', 'Isola', 'Fran isola', 'frandelqueran@gmail.com', 'frandelqueran2@gmail.com', '$2a$10$1IUxWeFS7HLTTa33LFyrUuKWvv7YFD83pWVozsoZ.vRc2VO7Q8voK', 'imgUser-1655764859222.png', '2003-11-25', 45234886, 1, '1111111111112', '2222222222222', 1, 14, 1),
(59, 'Tomi', 'De luca', 'TOMI DE LUCA', 'tomi@gmail.com', 'tomi2@gmail.com', '$2a$10$xLTpj5BL3nxYutN5ftIYi.ahrhn0lAhIm90AcNxpD6YXjI8/il9.6', 'imgUser-1655604191795.jpg', '2000-01-01', 12345678, 1, '2222222222222', '1111111111111', 2, 16, 1),
(61, 'Agus', 'Giraldez', 'Agus giraldez', 'agusgiraldez@gmail.com', 'agusgiraldez2@gmail.com', '$2a$10$gOTO3TS9WNbwsIjxLos3p.nANZBOZX2U5BLVOiYlaLmB.1cMTtAuq', 'boca.png', '2000-01-01', 12345678, 2, '5491134567891', '1234567891121', 2, 20, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_CAR_USU` (`usuarios_id`),
  ADD KEY `FK_CAR_PRO` (`productos_id`);

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_COM_USU` (`id_usuario`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_DIR_PRO` (`provincia_id`);

--
-- Indices de la tabla `estado`
--
ALTER TABLE `estado`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genero`
--
ALTER TABLE `genero`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_PRO_EST` (`estado_id`);

--
-- Indices de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_IMG_PRO` (`producto_id`);

--
-- Indices de la tabla `provincia`
--
ALTER TABLE `provincia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_USU_GEN` (`genero_id`),
  ADD KEY `FK_USU_DIR` (`direccion_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito`
--
ALTER TABLE `carrito`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `estado`
--
ALTER TABLE `estado`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `genero`
--
ALTER TABLE `genero`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito`
--
ALTER TABLE `carrito`
  ADD CONSTRAINT `FK_CAR_PRO` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_CAR_USU` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `FK_COM_USU` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `FK_DIR_PRO` FOREIGN KEY (`provincia_id`) REFERENCES `provincia` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `FK_PRO_EST` FOREIGN KEY (`estado_id`) REFERENCES `estado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `productos_imagenes`
--
ALTER TABLE `productos_imagenes`
  ADD CONSTRAINT `FK_IMG_PRO` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `FK_USU_DIR` FOREIGN KEY (`direccion_id`) REFERENCES `direccion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_USU_GEN` FOREIGN KEY (`genero_id`) REFERENCES `genero` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
