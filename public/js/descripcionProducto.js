window.addEventListener('load', () => {
	const imagenes = document.querySelector('.imagenes');
	const flechaAtras = document.querySelector('#flecha-atras');
	const flechaAdelante = document.querySelector('#flecha-adelante');
	const imagenesArray = document.querySelectorAll('.imagen');

	imagenes.style.width = `calc(100% * ${imagenesArray.length} )`;

	imagenesArray.forEach((imagen) => {
		imagen.style.width = `calc(100% / ${imagenesArray.length})`;
	});

	const transform = document.querySelector('.transform');
	let contador = 1;

	flechaAtras.addEventListener('click', () => {
		let clicksPermitidos = imagenesArray.length;

		contador--;

		if (contador < 1) {
			contador = clicksPermitidos;
		}

		if (contador <= clicksPermitidos && contador > 0) {
			imagenes.style.transform = `translateX(${
				(contador - 1) * (100 / -clicksPermitidos)
			}%)`;
		}
	});

	flechaAdelante.addEventListener('click', () => {
		let clicksPermitidos = imagenesArray.length;

		contador++;

		if (contador > clicksPermitidos) {
			contador = 1;
		}

		if (contador <= clicksPermitidos) {
			imagenes.style.transform = `translateX(${
				(contador - 1) * (100 / -clicksPermitidos)
			}%)`;
		}
	});









	

	const fechaPartida = document.getElementById('fechaPartida');
	const fechaLlegada = document.getElementById('fechaLlegada');

    fechaLlegada.disabled = true;

	const errorBackFechaPartida = document.getElementById(
		'error-back-fecha-partida'
	);
	const errorBackFechaLlegada = document.getElementById(
		'error-back-fecha-llegada'
	);

	const errorFechaPartida = document.querySelector('.fecha-partida');
	const errorFechaLlegada = document.querySelector('.fecha-llegada');

	const msgErrorFechaPartida = document.querySelector('.fecha-partida p');
	const msgErrorFechaLlegada = document.querySelector('.fecha-llegada p');

	const form = document.getElementById('form-send-product');
	const btn = document.getElementById('btn');

	let errores = {
		todoOkPartida: 'No',
        todoOkLlegada: 'No'
	};

	fechaPartida.addEventListener('blur', () => {

		errorBackFechaPartida != null
			? (errorBackFechaPartida.style.display = 'none')
			: null;

		let date = new Date();
		let ano = date.getFullYear();

		let añoValidacionPartida = new Date(`${fechaPartida.value}`).getFullYear();
		let añoValidacionLlegada = new Date(`${fechaLlegada.value}`).getFullYear();

		let restaAñosActual = ano - añoValidacionPartida;


		if (fechaPartida.value === '' || fechaPartida.value === undefined) {
			errores.fechaPartida =
				'Tienes que poner la fecha del dia en el que vas a partir';
			fechaPartida.classList.add('is-invalid');
			errorFechaPartida.style.display = 'block';
			msgErrorFechaPartida.innerText = errores.fechaPartida;
		} else if (fechaPartida.value) {
			if (!añoValidacionPartida) {
				errores.fechaPartida = 'Fecha invalida';
				fechaPartida.classList.add('is-invalid');
				errorFechaPartida.style.display = 'block';
				msgErrorFechaPartida.innerText = errores.fechaPartida;
			} else if (restaAñosActual > 0) {
				errores.fechaPartida = 'Eso es un año pasado';
				fechaPartida.classList.add('is-invalid');
				errorFechaPartida.style.display = 'block';
				msgErrorFechaPartida.innerText = errores.fechaPartida;
			} else {
				const hoy = new Date();
				const anoHoy = hoy.getFullYear();
				const mesHoy = parseInt(hoy.getMonth() + 1);
				const diaHoy = hoy.getDate();

				const anoRecibido = parseInt(String(fechaPartida.value).substring(0, 4));
				const mesRecibido = parseInt(String(fechaPartida.value).substring(5, 7));
				const diaRecibido = parseInt(String(fechaPartida.value).substring(8, 10));

				let diasAntelacionReservas = diaRecibido - diaHoy;

				if (anoRecibido == anoHoy) {
					if (mesRecibido < mesHoy) {
						errores.fechaPartida = 'Eso es un mes pasado';
						fechaPartida.classList.add('is-invalid');
						errorFechaPartida.style.display = 'block';
						msgErrorFechaPartida.innerText = errores.fechaPartida;
					} else if (mesRecibido == mesHoy) {
						if (diaRecibido < diaHoy) {
							errores.fechaPartida = 'Eso es un dia pasado';
							fechaPartida.classList.add('is-invalid');
							errorFechaPartida.style.display = 'block';
							msgErrorFechaPartida.innerText =
								errores.fechaPartida;
						} else if (diasAntelacionReservas <= 2) {
							errores.fechaPartida =
								'No puedes hacer reservas sin tres dias de antelacion';
							fechaPartida.classList.add('is-invalid');
							errorFechaPartida.style.display = 'block';
							msgErrorFechaPartida.innerText =
								errores.fechaPartida;
						} else {
							delete errores.fechaPartida;
							errores.todoOkPartida = 'Ok';
							fechaPartida.classList.remove('is-invalid');
							errorFechaPartida.style.display = 'none';
						}
					} else {
						delete errores.fechaPartida;
						errores.todoOkPartida = 'Ok';
						fechaPartida.classList.remove('is-invalid');
						errorFechaPartida.style.display = 'none';
					}
				} else {
					delete errores.fechaPartida;
					errores.todoOkPartida = 'Ok';
					fechaPartida.classList.remove('is-invalid');
					errorFechaPartida.style.display = 'none';
				}
			}
		}
       
        if (!errores.fechaPartida && errores.todoOkPartida == 'Ok') {
            fechaLlegada.disabled = false;
        } else if (fechaPartida.value == ''){
            fechaLlegada.disabled = true;
        }

	});

	

    

	fechaLlegada.addEventListener('blur', (e) => {
		errorBackFechaLlegada != null
			? (errorBackFechaLlegada.style.display = 'none')
			: null;

		//Datos para validar bien el año
		let date = new Date();
		let ano = date.getFullYear();

		let añoValidacionLlegada = new Date(`${fechaLlegada.value}`).getFullYear();
		let añoValidacionPartida = new Date(`${fechaPartida.value}`).getFullYear();

		let restaAñosActual = ano - añoValidacionLlegada;
		let restaAños = añoValidacionLlegada - añoValidacionPartida;

		if (fechaLlegada.value === '' || fechaLlegada.value === undefined) {
			errores.fechaLlegada =
				'Tienes que poner la fecha del dia en el que vas a volver';
			fechaLlegada.classList.add('is-invalid');
			errorFechaLlegada.style.display = 'block';
			msgErrorFechaLlegada.innerText = errores.fechaLlegada;
		} else if (fechaLlegada.value) {
			if (!añoValidacionLlegada) {
				errores.fechaLlegada = 'Fecha invalida';
				fechaLlegada.classList.add('is-invalid');
				errorFechaLlegada.style.display = 'block';
				msgErrorFechaLlegada.innerText = errores.fechaLlegada;
			} else if (restaAños >= 2 && fechaLlegada.value) {
				errores.fechaLlegada =
					'No puedes alquilar una van tanto tiempo, para eso compra una';
				fechaLlegada.classList.add('is-invalid');
				errorFechaLlegada.style.display = 'block';
				msgErrorFechaLlegada.innerText = errores.fechaLlegada;
			} else if (restaAños < 0 && fechaLlegada.value) {
				errores.fechaLlegada = 'Eso es un año pasado';
				fechaLlegada.classList.add('is-invalid');
				errorFechaLlegada.style.display = 'block';
				msgErrorFechaLlegada.innerText = errores.fechaLlegada;
			} else if (restaAñosActual > 0) {
				errores.fechaLlegada = 'Eso es un año pasado';
				fechaLlegada.classList.add('is-invalid');
				errorFechaLlegada.style.display = 'block';
				msgErrorFechaLlegada.innerText = errores.fechaLlegada;
			} else {
				//Datos para validar el dia, mes y año

				const hoy = new Date();
				const anoHoy = hoy.getFullYear();
				const mesHoy = parseInt(hoy.getMonth() + 1);
				const diaHoy = hoy.getDate();

				const anoRecibidoPartida = parseInt(String(fechaPartida.value).substring(0, 4));
				const mesRecibidoPartida = parseInt(String(fechaPartida.value).substring(5, 7));
				const diaRecibidoPartida = parseInt(String(fechaPartida.value).substring(8, 10));

				const anoRecibidoLlegada = parseInt(String(fechaLlegada.value).substring(0, 4));
				const mesRecibidoLlegada = parseInt(String(fechaLlegada.value).substring(5, 7));
				const diaRecibidoLlegada = parseInt(String(fechaLlegada.value).substring(8, 10));

				let fecha1 = new Date(`${fechaPartida.value}`).getTime();
				let fecha2 = new Date(`${fechaLlegada.value}`).getTime();

				var diff = (fecha2 - fecha1) / (1000 * 60 * 60 * 24);

				if (anoRecibidoLlegada == anoRecibidoPartida) {
					if (anoRecibidoLlegada == anoHoy) {
						if (mesRecibidoLlegada < mesRecibidoPartida) {
							errores.fechaLlegada = 'Eso es un mes pasado';
							fechaLlegada.classList.add('is-invalid');
							errorFechaLlegada.style.display = 'block';
							msgErrorFechaLlegada.innerText =
								errores.fechaLlegada;
						} else if (mesRecibidoLlegada == mesRecibidoPartida) {
							if (mesRecibidoLlegada == mesHoy) {
								if (diaRecibidoPartida < diaHoy) {
									errores.fechaLlegada =
										'Tienes que elegir bien las fechas';
									fechaLlegada.classList.add('is-invalid');
									errorFechaLlegada.style.display = 'block';
									msgErrorFechaLlegada.innerText =
										errores.fechaLlegada;
								} else if (
									diaRecibidoLlegada < diaRecibidoPartida
								) {
									errores.fechaLlegada =
										'Eso es un dia pasado';
									fechaLlegada.classList.add('is-invalid');
									errorFechaLlegada.style.display = 'block';
									msgErrorFechaLlegada.innerText =
										errores.fechaLlegada;
								} else if (diaRecibidoLlegada < diaHoy) {
									errores.fechaLlegada =
										'Eso es un dia pasado';
									fechaLlegada.classList.add('is-invalid');
									errorFechaLlegada.style.display = 'block';
									msgErrorFechaLlegada.innerText =
										errores.fechaLlegada;
								} else if (diff < 3) {
									errores.fechaLlegada =
										'Tienes que reservar por lo menos 3 dias';
									fechaLlegada.classList.add('is-invalid');
									errorFechaLlegada.style.display = 'block';
									msgErrorFechaLlegada.innerText =
										errores.fechaLlegada;
								} else {
									delete errores.fechaLlegada;
									errores.todoOkLlegada = 'Ok';
									fechaLlegada.classList.remove('is-invalid');
									errorFechaLlegada.style.display = 'none';
                                    mostrarPrecioLlegada()
								}
							} else {
								if (diaRecibidoLlegada < diaRecibidoPartida) {
									errores.fechaLlegada =
										'Eso es un dia pasado';
									fechaLlegada.classList.add('is-invalid');
									errorFechaLlegada.style.display = 'block';
									msgErrorFechaLlegada.innerText =
										errores.fechaLlegada;
								} else if (diff < 3) {
									errores.fechaLlegada =
										'Tienes que reservar por lo menos 3 dias';
									fechaLlegada.classList.add('is-invalid');
									errorFechaLlegada.style.display = 'block';
									msgErrorFechaLlegada.innerText =
										errores.fechaLlegada;
								} else {
									delete errores.fechaLlegada;
									errores.todoOkLlegada = 'Ok';
									fechaLlegada.classList.remove('is-invalid');
									errorFechaLlegada.style.display = 'none';
                                    mostrarPrecioLlegada()
								}
							}
						} else if (mesRecibidoLlegada > mesRecibidoPartida) {
							if (diff < 0) {
								errores.fechaLlegada = 'Eso es un dia pasado';
								fechaLlegada.classList.add('is-invalid');
								errorFechaLlegada.style.display = 'block';
								msgErrorFechaLlegada.innerText =
									errores.fechaLlegada;
							} else if (diff < 3) {
								errores.fechaLlegada =
									'Tienes que reservar por lo menos 3 dias';
								fechaLlegada.classList.add('is-invalid');
								errorFechaLlegada.style.display = 'block';
								msgErrorFechaLlegada.innerText =
									errores.fechaLlegada;
							} else {
								delete errores.fechaLlegada;
								errores.todoOkLlegada = 'Ok';
								fechaLlegada.classList.remove('is-invalid');
								errorFechaLlegada.style.display = 'none';
                                mostrarPrecioLlegada()
							}
						}
					} else {
						if (diaRecibidoLlegada < diaRecibidoPartida) {
							errores.fechaLlegada = 'Eso es un dia pasado';
							fechaLlegada.classList.add('is-invalid');
							errorFechaLlegada.style.display = 'block';
							msgErrorFechaLlegada.innerText =
								errores.fechaLlegada;
						} else if (diff < 3) {
							errores.fechaLlegada =
								'Tienes que reservar por lo menos 3 dias';
							fechaLlegada.classList.add('is-invalid');
							errorFechaLlegada.style.display = 'block';
							msgErrorFechaLlegada.innerText =
								errores.fechaLlegada;
						} else {
							delete errores.fechaLlegada;
							errores.todoOkLlegada = 'Ok';
							fechaLlegada.classList.remove('is-invalid');
							errorFechaLlegada.style.display = 'none';
                            mostrarPrecioLlegada()
						}
					}
				} else {
                    delete errores.fechaLlegada;
					errores.todoOkLlegada = 'Ok';
					fechaLlegada.classList.remove('is-invalid');
					errorFechaLlegada.style.display = 'none';
                    mostrarPrecioLlegada()
                }
			}
		}
	});


    btn.addEventListener('click', (e) => {
     
		if (errores.fechaPartida || errores.fechaLlegada) {
			e.preventDefault();
		} else if (errores.todoOkPartida == 'No' || errores.todoOkLlegada == 'No') {
			e.preventDefault();
		} else {
			form.submit();
		}

	});

    


    function mostrarPrecioLlegada (){
        if(fechaLlegada.value && fechaPartida.value) {
            if (!errores.fechaPartida && !errores.fechaLlegada) {
            
                let precioTotal = document.querySelector('.precio-total')
                let diasDeVacaciones = document.querySelector('.dias-de-vacaciones')
                let precio = document.querySelector('.precio')
            
                let fecha1 = new Date(`${fechaPartida.value}`).getTime()
                let fecha2 = new Date(`${fechaLlegada.value}`).getTime()
            
                var diff = (fecha2 - fecha1) / (1000*60*60*24);
            
                diasDeVacaciones.innerHTML = `Te irias de vacaciones desde el <strong>${fechaPartida.value}</strong> al <strong>${fechaLlegada.value}</strong>, <strong>${diff}</strong> dias en total`
                precioTotal.innerHTML = `El precio total seria de <strong>$${parseInt(precio.innerHTML) * diff}</strong>`
            
                diasDeVacaciones.style.display = 'block'
                precioTotal.style.display = 'block'
            
            } else {
                let precioTotal = document.querySelector('.precio-total')
                let diasDeVacaciones = document.querySelector('.dias-de-vacaciones')
            
                diasDeVacaciones.style.display = 'none'
                precioTotal.style.display = 'none'
            }
        }
    }
});


    
    // fechaPartida.addEventListener('blur', () => {
    //     if(fechaPartida.value && fechaLlegada.value) {
    //         if (!errores.fechaPartida && !errores.fechaLlegada) {
    //             let precioTotal = document.querySelector('.precio-total')
    //             let diasDeVacaciones = document.querySelector('.dias-de-vacaciones')
    //             let precio = document.querySelector('.precio')
        
    //             let fecha1 = new Date(`${fechaPartida.value}`).getTime()
    //             let fecha2 = new Date(`${fechaLlegada.value}`).getTime()
        
    //             var diff = (fecha2 - fecha1) / (1000*60*60*24);
        
    //             diasDeVacaciones.innerHTML = `Te irias de vacaciones desde el <strong>${fechaPartida.value}</strong> al <strong>${fechaLlegada.value}</strong>, <strong>${diff}</strong> dias en total`
    //             precioTotal.innerHTML = `El precio total seria de <strong>$${parseInt(precio.innerHTML) * diff}</strong>`
        
    //             diasDeVacaciones.style.display = 'block'
    //             precioTotal.style.display = 'block'
        
    //         } else {
    //             let precioTotal = document.querySelector('.precio-total')
    //             let diasDeVacaciones = document.querySelector('.dias-de-vacaciones')
        
    //             diasDeVacaciones.style.display = 'none'
    //             precioTotal.style.display = 'none'
    //         }
    //     }
    // })