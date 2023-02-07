const { check } = require('express-validator');
const db = require('../../database/models');

const validations = [
	check('fechaPartida')
		.notEmpty()
		.withMessage('Tienes que poner la fecha del dia en el que vas a partir')
		.custom((value, { req }) => {
			let date = new Date()
			let ano = date.getFullYear()

			let añoValidacionPartida = new Date(`${value}`).getFullYear();
			let añoValidacionLlegada= new Date(`${req.body.fechaLLegada}`).getFullYear();

			let restaAñosActual = ano - añoValidacionPartida
			let restaAños = añoValidacionLlegada - añoValidacionPartida;

			if (añoValidacionPartida.toString().length > 4 || restaAños >= 2) {
				throw new Error(
					'No puedes alquilar una van tanto tiempo, para eso compra una'
				);
			} else if (restaAños < 0) {
				throw new Error('Eso es un año pasado');
			} else if (restaAñosActual > 0) {
				throw new Error('Eso es un año pasado');
			} else {
				const hoy = new Date();
				const anoHoy = hoy.getFullYear();
				const mesHoy = parseInt(hoy.getMonth() + 1);
				const diaHoy = hoy.getDate();

				const anoRecibido = parseInt(String(value).substring(0, 4));
				const mesRecibido = parseInt(String(value).substring(5, 7));
				const diaRecibido = parseInt(String(value).substring(8, 10));

				let diasAntelacionReservas = diaRecibido - diaHoy;

				if (anoRecibido == anoHoy) {
					if (mesRecibido < mesHoy) {
						throw new Error('Eso es un mes pasado');
					} else if (mesRecibido == mesHoy) {
						if (diaRecibido < diaHoy) {
							throw new Error('Eso es un dia pasado');
						} else if (diasAntelacionReservas <= 2) {
							throw new Error(
								'No puedes hacer reservas sin tres dias de antelacion'
							);
						} else {
							return true;
						}
					} else {
						return true;
					}
				} else {
					return true;
				}
			}
		}),
	check('fechaLlegada')
		.notEmpty()
		.withMessage('Tienes que poner la fecha del dia en el que vas a volver')
		.custom((value, { req }) => {

			let date = new Date()
			let ano = date.getFullYear()


			
			let añoValidacionLlegada = new Date(`${value}`).getFullYear();
			let añoValidacionPartida= new Date(`${req.body.fechaPartida}`).getFullYear();
			
			
			let restaAñosActual = ano - añoValidacionPartida
			let restaAños = añoValidacionLlegada - añoValidacionPartida;


			if (añoValidacionLlegada.toString().length > 4 || restaAños >= 2) {
				throw new Error(
					'No puedes alquilar una van tanto tiempo, para eso compra una'
				);
			} else if (restaAños < 0) {
				throw new Error('Eso es un año pasado');
			} else if (restaAñosActual > 0) {
				throw new Error('Eso es un año pasado');
			} else {
				const hoy = new Date();
				const anoHoy = hoy.getFullYear();
				const mesHoy = parseInt(hoy.getMonth() + 1);
				const diaHoy = hoy.getDate();

				const anoRecibidoPartida = parseInt(
					String(req.body.fechaPartida).substring(0, 4)
				);
				const mesRecibidoPartida = parseInt(
					String(req.body.fechaPartida).substring(5, 7)
				);
				const diaRecibidoPartida = parseInt(
					String(req.body.fechaPartida).substring(8, 10)
				);

				const anoRecibidoLlegada = parseInt(
					String(value).substring(0, 4)
				);
				const mesRecibidoLlegada = parseInt(
					String(value).substring(5, 7)
				);
				const diaRecibidoLlegada = parseInt(
					String(value).substring(8, 10)
				);


				const fechaPartida = req.body.fechaPartida;

				let fecha1 = new Date(`${fechaPartida}`).getTime();
				let fecha2 = new Date(`${value}`).getTime();

				var diff = (fecha2 - fecha1) / (1000 * 60 * 60 * 24);


				

				if(anoRecibidoLlegada == anoRecibidoPartida){
					if (anoRecibidoLlegada == anoHoy) {
						if(mesRecibidoLlegada < mesRecibidoPartida){
							throw new Error('Eso es un mes pasado');
						} else if (mesRecibidoLlegada == mesRecibidoPartida) {
							if (mesRecibidoLlegada == mesHoy) {
								if (diaRecibidoPartida < diaHoy) {
									throw new Error('Tienes que elegir bien las fechas');
								} else if (diaRecibidoLlegada < diaRecibidoPartida) {
									throw new Error('Eso es un dia pasado');
								} else if (diaRecibidoLlegada < diaHoy) {
									throw new Error('Eso es un dia pasado');
								} else if (diff < 3) {
									throw new Error('Tienes que reservar por lo menos 3 dias');
								}
							} else {
								if (diaRecibidoLlegada < diaRecibidoPartida) {
									throw new Error('Eso es un dia pasado');
								} else if (diff < 3) {
									throw new Error('Tienes que reservar por lo menos 3 dias');
								}
							}
								
						} else if (mesRecibidoLlegada > mesRecibidoPartida) {
							if (diff < 0) {
								throw new Error('Eso es un dia pasado');
							} else if (diff < 3) {
								throw new Error('Tienes que reservar por lo menos 3 dias');
							}
						}
					} else {
						if (diaRecibidoLlegada < diaRecibidoPartida) {
							throw new Error('Eso es un dia pasado');
						} else if (diff < 3) {
							throw new Error('Tienes que reservar por lo menos 3 dias');
						}
					}
				} 


				return true;
			}
		}),
];

module.exports = validations;



// else if (anoRecibidoLlegada > anoHoy) {
// 	if(mesRecibidoLlegada < mesRecibidoPartida){
// 		throw new Error('Eso es un mes pasado');
// 	} else if (mesRecibidoLlegada == mesRecibidoPartida) {
// 		if (diaRecibidoLlegada < diaRecibidoPartida) {
// 			throw new Error('Eso es un dia pasado');
// 		} else if (diff < 3) {
// 			throw new Error('Tienes que reservar por lo menos 3 dias');
// 		}
// 	} else if (mesRecibidoLlegada > mesRecibidoPartida) {
// 		if (diff < 0) {
// 			throw new Error('Eso es un dia pasado');
// 		} else if (diff < 3) {
// 			throw new Error('Tienes que reservar por lo menos 3 dias');
// 		}
// 	}
// }