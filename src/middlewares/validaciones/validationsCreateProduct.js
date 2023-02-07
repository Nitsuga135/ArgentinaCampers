const { check } = require('express-validator');
const path = require('path');

const validations = [
	check('marca')
		.notEmpty()
		.withMessage('Tienes que completar el campo con la marca del producto')
		.bail()
		.isLength({ min: 2 })
		.withMessage('Tiene que tener al menos dos letras'),
	check('modelo')
		.notEmpty()
		.withMessage('Tienes que completar el campo con el modelo del producto')
		.bail()
		.isLength({ min: 2 })
		.withMessage('Tiene que tener al menos dos letras'),
	check('color')
		.notEmpty()
		.withMessage('Tienes que elegir el color de la van'),
	check('descripcion')
		.notEmpty()
		.withMessage(
			'Tienes que completar el campo con la descripcion del producto'
		)
		.bail()
		.isLength({ min: 20 })
		.withMessage('La descripcion tiene que tener mas de 20 caracteres'),
	check('capacidad')
		.notEmpty()
		.withMessage(
			'Tienes que completar el campo con la capacidad del producto'
		)
		.bail()
		.isNumeric()
		.withMessage('Tienes que completar con un número')
		.bail()
		.custom((value, { req }) => {
			if (value == 0) {
				throw new Error(
					'No hay ninguna van que tenga capacidad para 0 personas'
				);
			}
			return true;
		}),
	check('precioDia')
		.notEmpty()
		.withMessage(
			'Tienes que completar el campo con el precio del producto'
		)
		.bail()
		.isNumeric()
		.withMessage('Tienes que completar con un número')
		.bail()
		.custom((value, { req }) => {
			if (value == 0) {
				throw new Error('Una van no puede valer por dia $0');
			}
			return true;
		}),
	check('antiguedad')
		.notEmpty()
		.withMessage(
			'Tienes que completar el campo con la antiguedad del producto'
		)
		.bail()
		.isNumeric()
		.withMessage('Tienes que completar con un número')
		.bail()
		.custom((value, { req }) => {
			if (value < 2000) {
				throw new Error(
					'Nuestras vans son nuevas, todas son del 2000 en adelante'
				);
			}
			return true;
		})
		.bail()
		.custom((value, { req }) => {
			
			if(value.length > 4) {
				throw new Error(
					'Ese año todavia no llego'
				);
			}

			return true;
		})
		.bail()
		.custom((value, { req }) => {
			let date = new Date()

			let fechaHoy = date.getFullYear()
			let anoRecibido = parseInt(value);
			
			let restaAños = anoRecibido - fechaHoy

			if(restaAños > 0) {
				throw new Error('La camper van no puede venir del futuro')
			}

			return true

		}),
	check('stock')
		.notEmpty()
		.withMessage('Tienes que completar el campo con el stock del producto')
		.bail()
		.isNumeric()
		.withMessage('Tienes que completar con un número')
		.bail()
		.custom((value, { req }) => {
			if (value < 0) {
				throw new Error('No tenemos vans negativas');
			}
			return true;
		}),
	check('img')
		.custom((value, { req }) => {
			if (req.files == '') {
				throw new Error('Por favor, suba una imagen');
			}

			return true;
		})
		.custom((value, { req }) => {
			let imagenes = req.files;

			let validExtension = [
				'.jpg',
				'.png',
				'.PNG',
				'.JPG',
				'.jpeg',
				'.JPEG',
				'.gif',
				'.GIF'
			];

			imagenes.forEach((imagen) => {
				let fileExtension = path.extname(imagen.originalname);
				if (!validExtension.includes(fileExtension)) {
					throw new Error(
						`Las extensiones tienen que ser ${validExtension.join(
							', '
						)}"`
					);
				}
			});

			return true;
		}),
	check('ultimoService')
		.notEmpty()
		.withMessage('Tienes que completar el campo con la fecha del ultimo service realizado')
		.custom((value, { req }) => {

			

			let date = new Date()

			let fechaHoy = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
			let fechaRecibida = new Date(`${value}`).getTime();

			var diff = (fechaHoy - fechaRecibida) / (1000 * 60 * 60 * 24);

			if (diff < 0) {
				throw new Error('El ultimo service no puede ser un dia en el futuro')
			}
			
			return true
			
		})
];

module.exports = validations;
