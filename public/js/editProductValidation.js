document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {
		const productMarcaInput = document.getElementById('marca-del-producto');
		const productModeloInput = document.getElementById('modelo-del-producto');
		const productImagenInput = document.getElementById('imagen-del-producto-a-crear');
		const productColorInput = document.getElementById('color-del-producto');
        const productDescripcionInput = document.getElementById('descripcion-del-producto');
		const productCapacidadInput = document.getElementById('capacidad-del-producto');
		const productPrecioInput = document.getElementById('precio-del-producto');
		const productUltimoServiceInput = document.getElementById('ultimo-service-del-producto');
		const productAntiguedadInput = document.getElementById('antiguedad-del-producto');
        const productStockInput = document.getElementById('stock-del-producto');

		const errorBackProductMarca = document.getElementById('error-back-product-marca');
		const errorBackProductModelo = document.getElementById('error-back-product-modelo');
		const errorBackProductImagen = document.getElementById('error-back-product-imagen');
		const errorBackProductColor = document.getElementById('error-back-product-color');
		const errorBackProductDescripcion = document.getElementById('error-back-product-descripcion');
		const errorBackProductCapacidad = document.getElementById('error-back-product-capacidad');
		const errorBackProductPrecio = document.getElementById('error-back-product-precio');
		const errorBackProductUltimoService = document.getElementById('error-back-product-ultimo-service');
		const errorBackProductAntiguedad = document.getElementById('error-back-product-antiguedad');
        const errorBackProductStock = document.getElementById('error-back-product-stock')


		const errorProductMarca = document.querySelector('.product-marca');
		const errorProductModelo = document.querySelector('.product-modelo');
		const errorProductImagen = document.querySelector('.product-imagen');
		const errorProductColor = document.querySelector('.product-color');
		const errorProductDescripcion = document.querySelector('.product-descripcion');
		const errorProductCapacidad = document.querySelector('.product-capacidad');
		const errorProductPrecio = document.querySelector('.product-precio');
		const errorProductUltimoService = document.querySelector('.product-ultimo-service');
		const errorProductAntiguedad = document.querySelector('.product-antiguedad');
        const errorProductStock = document.querySelector('.product-stock')

		const msgErrorProductMarca = document.querySelector('.product-marca p');
		const msgErrorProductModelo = document.querySelector('.product-modelo p');
		const msgErrorProductImagen = document.querySelector('.product-imagen p');
		const msgErrorProductColor = document.querySelector('.product-color p');
		const msgErrorProductDescripcion = document.querySelector('.product-descripcion p');
		const msgErrorProductCapacidad = document.querySelector('.product-capacidad p');
		const msgErrorProductPrecio = document.querySelector('.product-precio p');
		const msgErrorProductUltimoService = document.querySelector('.product-ultimo-service p');
		const msgErrorProductAntiguedad = document.querySelector('.product-antiguedad p');
        const msgErrorProductStock = document.querySelector('.product-stock p')


        errorProductMarca.style.display = 'none'
		errorProductModelo.style.display = 'none'
		errorProductImagen.style.display = 'none'
		errorProductColor.style.display = 'none'
		errorProductDescripcion.style.display = 'none'
		errorProductCapacidad.style.display = 'none'
		errorProductPrecio.style.display = 'none'
		errorProductUltimoService.style.display = 'none'
		errorProductAntiguedad.style.display = 'none'
        errorProductStock.style.display = 'none'


        const marcaExistente = productMarcaInput.value
        const modeloExistente = productModeloInput.value
        const colorExistente = productColorInput.value
        const descripcionExistente = productDescripcionInput.value
        const capacidadExistente = productCapacidadInput.value
        const precioExistente = productPrecioInput.value
        const ultimoServiceExistente = productUltimoServiceInput.value
        const antiguedadExistente = productAntiguedadInput.value
        const stockExistente = productStockInput.value


 

		const form = document.getElementById('form-edit-product');
		const btnEnviar = document.getElementById('btn');



		let errores = {
			todoOk: 'No'
		};

        productImagenInput.value = ''


        let validIMGType = [
            "image/png", 
            "image/PNG", 
            "image/jpg", 
            "image/JPG", 
            "image/jpeg", 
            "image/JPEG", 
            "image/gif", 
            "image/GIF"
        ]



        productImagenInput.addEventListener('blur', () => {    
            errorBackProductImagen != null
                ? (errorBackProductImagen.style.display = 'none')
                : null;

                
            if (
                productImagenInput.files.length > 0
            ) {
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

                let invalidType = true;

                for (let i = 0; i < productImagenInput.files.length; i++) {
                    if (validIMGType.includes(productImagenInput.files[i].type)) {
                        invalidType = true;
                    } else {
                        invalidType = false;
                        break;
                    }
                }


                if (invalidType == false) {
                    errores.productImagen = `Las extensiones tienen que ser ${validExtension.join(', ')}`;
                    errorProductImagen.style.display = 'block';
                    msgErrorProductImagen.innerText = errores.productImagen;
                    divImagenes.style.display = 'none'
                } else {
                    delete errores.productImagen;
                    errores.todoOk = 'Ok';
                    errorProductImagen.style.display = 'none';
    
                    mostrarImgs()
                }  
            } 
        })

       

        const divImagenes = document.querySelector('.carrousel-imagen')


        const imgContainer = document.querySelector('.imagenes');
        // imgContainer.classList.add('imagenes')
        // imgContainer.classList.add('transform')

        const ulFlechas = document.createElement('ul')
        ulFlechas.setAttribute('class', 'flechas')

        const flechaAtras = document.createElement('i')
        flechaAtras.classList.add('fa-solid')
        flechaAtras.classList.add('fa-caret-left')
        flechaAtras.setAttribute('id', 'flecha-atras')

        
        const flechaAdelante = document.createElement('i')
        flechaAdelante.classList.add('fa-solid')
        flechaAdelante.classList.add('fa-caret-right')
        flechaAdelante.setAttribute('id', 'flecha-adelante')

        ulFlechas.appendChild(flechaAtras)
        ulFlechas.appendChild(flechaAdelante)

       
        divImagenes.appendChild(imgContainer)
        divImagenes.appendChild(ulFlechas)


        //A partir de aca se muestran las fotos que ya habian     
    
        let imagenes = document.querySelectorAll('.imagen')
    
        imgContainer.style.width = `calc(100% * ${imagenes.length} )`;


    
        imagenes.forEach( imagen => {
            if(window.innerWidth <= 300) {
                imagen.style.width = '200px'
                imagen.style.height = '100px'
            } else {
                imagen.style.width = `calc(100% / ${imagenes.length})`;
                imagen.style.height = `350px`;
            }
        })
    
        const flechaAtrasID = document.querySelector('#flecha-atras');
        const flechaAdelanteiD = document.querySelector('#flecha-adelante');
    
        let contador = 1;
    
        flechaAtrasID.addEventListener('click', () => {
            let clicksPermitidos = imagenes.length;
            
            contador--;
            
            if (contador < 1) {
                contador = clicksPermitidos;
            }
            
            if (contador <= clicksPermitidos && contador > 0) {
                imgContainer.style.transform = `translateX(${
                    (contador - 1) * (100 / -clicksPermitidos)
                }%)`;
            }
        });
            
        flechaAdelanteiD.addEventListener('click', () => {
            let clicksPermitidos = imagenes.length;
            
            contador++;
            
            if (contador > clicksPermitidos) {
                contador = 1;
            }
            
            if (contador <= clicksPermitidos) {
                imgContainer.style.transform = `translateX(${
                    (contador - 1) * (100 / -clicksPermitidos)
                }%)`;
            }
        });

        //A partir de aca se muestran las fotos nuevas que se suben

        

        function mostrarImgs () {
            if (productImagenInput.files.length > 0) {
                
                imgContainer.innerHTML = ''
                let imagenesArray = productImagenInput.files
                for(let i = 0; i < imagenesArray.length; i++) {
                    const element = URL.createObjectURL(imagenesArray[i])
    
                    const imagenElemento = document.createElement('img')
                    imagenElemento.setAttribute('class', 'imagen') 
    
                    imagenElemento.src = element;
    
                    imgContainer.appendChild(imagenElemento)
                }
                divImagenes.style.display = 'block'
                
    
                let imagenes = document.querySelectorAll('.imagen')


    
                imgContainer.style.width = `calc(100% * ${imagenes.length} )`;
    
    
    
                imagenes.forEach( imagen => {
                    if(window.innerWidth <= 300) {
                        imagen.style.width = '200px'
                        imagen.style.height = '100px'
                    } else {
                        imagen.style.width = `calc(100% / ${imagenes.length})`;
                        imagen.style.height = `350px`;
                    }
    
                })
    
                const flechaAtras = document.querySelector('#flecha-atras');
                const flechaAdelante = document.querySelector('#flecha-adelante');
    
                let contador = 1;
    
                flechaAtras.addEventListener('click', () => {
                    let clicksPermitidos = imagenes.length;
            
                    contador--;
            
                    if (contador < 1) {
                        contador = clicksPermitidos;
                    }
            
                    if (contador <= clicksPermitidos && contador > 0) {
                        imgContainer.style.transform = `translateX(${
                            (contador - 1) * (100 / -clicksPermitidos)
                        }%)`;
                    }
                });
            
                flechaAdelante.addEventListener('click', () => {
                    let clicksPermitidos = imagenes.length;
            
                    contador++;
            
                    if (contador > clicksPermitidos) {
                        contador = 1;
                    }
            
                    if (contador <= clicksPermitidos) {
                        imgContainer.style.transform = `translateX(${
                            (contador - 1) * (100 / -clicksPermitidos)
                        }%)`;
                    }
                });
            } else {
                divImagenes.style.display = 'none'
            }
        }




        productMarcaInput.addEventListener('blur', () => {
            errorBackProductMarca != null
                ? (errorBackProductMarca.style.display = 'none')
                : null;

            if (
                productMarcaInput.value === '' ||
                productMarcaInput.value === undefined
            ) {
                errores.productMarca = 'Tienes que completar el campo con la marca del producto';
                productMarcaInput.classList.add('is-invalid');
                errorProductMarca.style.display = 'block';
                msgErrorProductMarca.innerText = errores.productMarca;
            } else if (productMarcaInput.value === marcaExistente) {
                errores.todoOk = 'No';
                productMarcaInput.classList.remove('is-invalid');
                errorProductMarca.style.display = 'none';
            } else if (productMarcaInput.value.length < 2) {
                errores.productMarca = 'Tiene que tener al menos dos letras';
                productMarcaInput.classList.add('is-invalid');
                errorProductMarca.style.display = 'block';
                msgErrorProductMarca.innerText = errores.productMarca;
            } else {
                delete errores.productMarca;
                errores.todoOk = 'Ok';
                productMarcaInput.classList.remove('is-invalid');
                errorProductMarca.style.display = 'none';
            }
        })

        productModeloInput.addEventListener('blur', () => {
            errorBackProductModelo != null
                ? (errorBackProductModelo.style.display = 'none')
                : null;

            if (
                productModeloInput.value === '' ||
                productModeloInput.value === undefined
            ) {
                errores.productModelo = 'Tienes que completar el campo con el modelo del producto';
                productModeloInput.classList.add('is-invalid');
                errorProductModelo.style.display = 'block';
                msgErrorProductModelo.innerText = errores.productModelo;
            } else if (productModeloInput.value === modeloExistente) {
                errores.todoOk = 'No';
                productModeloInput.classList.remove('is-invalid');
                errorProductModelo.style.display = 'none';
            } else if (productModeloInput.value.length < 2) {
                errores.productModelo = 'Tiene que tener al menos dos letras';
                productModeloInput.classList.add('is-invalid');
                errorProductModelo.style.display = 'block';
                msgErrorProductModelo.innerText = errores.productModelo;
            } else {
                delete errores.productModelo;
                errores.todoOk = 'Ok';
                productModeloInput.classList.remove('is-invalid');
                errorProductModelo.style.display = 'none';
            }
        })



        productColorInput.addEventListener('blur', () => {    
            errorBackProductColor != null
                ? (errorBackProductColor.style.display = 'none')
                : null;
                
            if (
                productColorInput.value === '' ||
                productColorInput.value === undefined
            ) {
                errores.productColor = 'Tienes que elegir el color de la van';
                productColorInput.classList.add('is-invalid');
                errorProductColor.style.display = 'block';
                msgErrorProductColor.innerText = errores.productColor;
            } else if (productColorInput.value === colorExistente) {
                errores.todoOk = 'No';
                productColorInput.classList.remove('is-invalid');
                errorProductColor.style.display = 'none';
            } else {
                delete errores.productColor;
                productColorInput.classList.remove('is-invalid');
                errores.todoOk = 'Ok';
                errorProductColor.style.display = 'none';
            }
        })


        productDescripcionInput.addEventListener('blur', () => {
            errorBackProductDescripcion != null
                ? (errorBackProductDescripcion.style.display = 'none')
                : null;

            if (
                productDescripcionInput.value === '' ||
                productDescripcionInput.value === undefined
            ) {
                errores.productDescripcion = 'Tienes que completar el campo con la descripcion del producto'
                productDescripcionInput.classList.add('is-invalid');
                errorProductDescripcion.style.display = 'block';
                msgErrorProductDescripcion.innerText = errores.productDescripcion;
            } else if (productDescripcionInput.value === descripcionExistente) {
                errores.todoOk = 'No';
                productDescripcionInput.classList.remove('is-invalid');
                errorProductDescripcion.style.display = 'none';
            } else if (productDescripcionInput.value.length < 20) {
                errores.productDescripcion = 'La descripcion tiene que tener mas de 20 caracteres'
                productDescripcionInput.classList.add('is-invalid');
                errorProductDescripcion.style.display = 'block';
                msgErrorProductDescripcion.innerText = errores.productDescripcion;
            } else {
                delete errores.productDescripcion;
                errores.todoOk = 'Ok';
                productDescripcionInput.classList.remove('is-invalid');
                errorProductDescripcion.style.display = 'none';
            }
        })



        productCapacidadInput.addEventListener('blur', () => {    
            errorBackProductCapacidad != null
                ? (errorBackProductCapacidad.style.display = 'none')
                : null;

            if (
                productCapacidadInput.value === '' ||
                productCapacidadInput.value === undefined
            ) {
                errores.productCapacidad = 'Tienes que completar el campo con la capacidad del producto';
                productCapacidadInput.classList.add('is-invalid');
                errorProductCapacidad.style.display = 'block';
                msgErrorProductCapacidad.innerText = errores.productCapacidad;
            } else if (productCapacidadInput.value === capacidadExistente) {
                errores.todoOk = 'No';
                productCapacidadInput.classList.remove('is-invalid');
                errorProductCapacidad.style.display = 'none';
            } else if (parseInt(productCapacidadInput.value) === 0) {
                errores.productCapacidad = 'No hay ninguna van que tenga capacidad para 0 personas';
                productCapacidadInput.classList.add('is-invalid');
                errorProductCapacidad.style.display = 'block';
                msgErrorProductCapacidad.innerText = errores.productCapacidad;
            } else {
                delete errores.productCapacidad;
                errores.todoOk = 'Ok';
                productCapacidadInput.classList.remove('is-invalid');
                errorProductCapacidad.style.display = 'none';
            }
        })

        productPrecioInput.addEventListener('blur', () => {    
            errorBackProductPrecio != null
                ? (errorBackProductPrecio.style.display = 'none')
                : null;

            if (
                productPrecioInput.value === '' ||
                productPrecioInput.value === undefined
            ) {
                errores.productPrecio = 'Tienes que completar el campo con el precio del producto';
                productPrecioInput.classList.add('is-invalid');
                errorProductPrecio.style.display = 'block';
                msgErrorProductPrecio.innerText = errores.productPrecio;
            } else if (productPrecioInput.value === precioExistente) {
                errores.todoOk = 'No';
                productPrecioInput.classList.remove('is-invalid');
                errorProductPrecio.style.display = 'none';
            } else if (parseInt(productPrecioInput.value) === 0) {
                errores.productPrecio = 'Una van no puede valer por dia $0';
                productPrecioInput.classList.add('is-invalid');
                errorProductPrecio.style.display = 'block';
                msgErrorProductPrecio.innerText = errores.productPrecio;
            } else {
                delete errores.productPrecio;
                errores.todoOk = 'Ok';
                productPrecioInput.classList.remove('is-invalid');
                errorProductPrecio.style.display = 'none';
            }
        })

        productUltimoServiceInput.addEventListener('blur', () => {
            errorBackProductUltimoService != null
                ? (errorBackProductUltimoService.style.display = 'none')
                : null;

            if (
                productUltimoServiceInput.value === '' ||
                productUltimoServiceInput.value === undefined
            ) {
                errores.productUltimoService = 'Tienes que completar el campo con la fecha del ultimo service realizado';
                productUltimoServiceInput.classList.add('is-invalid');
                errorProductUltimoService.style.display = 'block';
                msgErrorProductUltimoService.innerText = errores.productUltimoService;
            } else if (productUltimoServiceInput.value === ultimoServiceExistente) {
                errores.todoOk = 'No';
                productUltimoServiceInput.classList.remove('is-invalid');
                errorProductUltimoService.style.display = 'none';
            } else {
                let date = new Date()

                let fechaHoy = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
                let fechaRecibida = new Date(`${productUltimoServiceInput.value}`).getTime();

                var diff = (fechaHoy - fechaRecibida) / (1000 * 60 * 60 * 24);

                if (diff < 0) {
                    errores.productUltimoService = 'El ultimo service no puede ser un dia en el futuro';
                    productUltimoServiceInput.classList.add('is-invalid');
                    errorProductUltimoService.style.display = 'block';
                    msgErrorProductUltimoService.innerText = errores.productUltimoService;
                } else {
                    delete errores.productUltimoService;
                    errores.todoOk = 'Ok';
                    productUltimoServiceInput.classList.remove('is-invalid');
                    errorProductUltimoService.style.display = 'none';
                }
            }
        })


        productAntiguedadInput.addEventListener('blur', () => {
            errorBackProductAntiguedad != null
                ? (errorBackProductAntiguedad.style.display = 'none')
                : null;

            //Sacar cuantos años de diferencia hay entre este año y el año que puso el admin
            let date = new Date()
            let fechaHoy = date.getFullYear()
            let anoRecibido = parseInt(productAntiguedadInput.value);
            let restaAños = anoRecibido - fechaHoy

            if (
                productAntiguedadInput.value === '' ||
                productAntiguedadInput.value === undefined
            ) {
                errores.productAntiguedad = 'Tienes que completar el campo con la antiguedad del producto';
                productAntiguedadInput.classList.add('is-invalid');
                errorProductAntiguedad.style.display = 'block';
                msgErrorProductAntiguedad.innerText = errores.productAntiguedad;
            } else if (productAntiguedadInput.value === antiguedadExistente) {
                errores.todoOk = 'No';
                productAntiguedadInput.classList.remove('is-invalid');
                errorProductAntiguedad.style.display = 'none';
            } else if (!Number(productAntiguedadInput.value)) {
                errores.productAntiguedad = 'Tienes que completar con un número';
                productAntiguedadInput.classList.add('is-invalid');
                errorProductAntiguedad.style.display = 'block';
                msgErrorProductAntiguedad.innerText = errores.productAntiguedad;
            } else if (parseInt(productAntiguedadInput.value) < 2000) {
                errores.productAntiguedad = 'Nuestras vans son nuevas, todas son del 2000 en adelante';
                productAntiguedadInput.classList.add('is-invalid');
                errorProductAntiguedad.style.display = 'block';
                msgErrorProductAntiguedad.innerText = errores.productAntiguedad;
            } else if (productAntiguedadInput.value.length > 4) {
                errores.productAntiguedad = 'Ese año todavia no llego';
                productAntiguedadInput.classList.add('is-invalid');
                errorProductAntiguedad.style.display = 'block';
                msgErrorProductAntiguedad.innerText = errores.productAntiguedad;
            } else if (restaAños > 0) {
                errores.productAntiguedad = 'La camper van no puede venir del futuro';
                productAntiguedadInput.classList.add('is-invalid');
                errorProductAntiguedad.style.display = 'block';
                msgErrorProductAntiguedad.innerText = errores.productAntiguedad;
            } else {
                delete errores.productAntiguedad;
                errores.todoOk = 'Ok';
                productAntiguedadInput.classList.remove('is-invalid');
                errorProductAntiguedad.style.display = 'none';
            }

        })

        productStockInput.addEventListener('blur', () => {
            errorBackProductStock != null
                ? (errorBackProductStock.style.display = 'none')
                : null;

            if (productStockInput.value === stockExistente) {
                errores.todoOk = 'No';
                productStockInput.classList.remove('is-invalid');
                errorProductStock.style.display = 'none';
            } else {
                delete errores.productStock;
                errores.todoOk = 'Ok';
                productStockInput.classList.remove('is-invalid');
                errorProductStock.style.display = 'none';
            }
        })

        const subirStock = document.getElementById('subir-stock')
        const bajarStock = document.getElementById('bajar-stock')

        subirStock.addEventListener('click', () => {
            errorBackProductStock != null
                ? (errorBackProductStock.style.display = 'none')
                : null;

            if (productStockInput.value === stockExistente) {
                errores.todoOk = 'No';
                productStockInput.classList.remove('is-invalid');
                errorProductStock.style.display = 'none';
            } else {
                delete errores.productStock;
                errores.todoOk = 'Ok';
                productStockInput.classList.remove('is-invalid');
                errorProductStock.style.display = 'none';
            }
        })
        bajarStock.addEventListener('click', () => {
            errorBackProductStock != null
                ? (errorBackProductStock.style.display = 'none')
                : null;

            if (productStockInput.value === stockExistente) {
                errores.todoOk = 'No';
                productStockInput.classList.remove('is-invalid');
                errorProductStock.style.display = 'none';
            } else {
                delete errores.productStock;
                errores.todoOk = 'Ok';
                productStockInput.classList.remove('is-invalid');
                errorProductStock.style.display = 'none';
            }
        })


        
        btnEnviar.addEventListener('click', (e) => {
        
            if (
                errores.productMarca || 
                errores.productModelo || 
                errores.productImagen || 
                errores.productColor || 
                errores.productDescripcion || 
                errores.productCapacidad || 
                errores.productPrecio ||
                errores.productUltimoService || 
                errores.productAntiguedad) {
                e.preventDefault();
            } else if (
                errores.todoOk == 'No') {
                e.preventDefault();
            } else {
                form.submit();
            }

        });
	});
});
