window.addEventListener('load', () => {
    const reviewDestino = document.getElementById('review-destino');
    const reviewExperiencia = document.getElementById('review-experiencia');
    const reviewTitulo = document.getElementById('review-titulo');
    const reviewDescripcion = document.getElementById('review-descripcion');


    const iconReviewDestino = document.getElementById('icon-destino');
    const iconReviewExperiencia = document.getElementById('icon-experiencia');
    const iconReviewTitulo = document.getElementById('icon-titulo');
    const iconReviewDescripcion = document.getElementById('icon-descripcion');


    const errorBackReviewDestino = document.getElementById('error-back-review-destino');
    const errorBackReviewExperiencia = document.getElementById('error-back-review-experiencia');
    const errorBackReviewTitulo = document.getElementById('error-back-review-titulo');
    const errorBackReviewDescripcion = document.getElementById('error-back-review-descripcion');


    const errorReviewDestino = document.querySelector('.review-destino-div-error');
    const errorReviewExperiencia = document.querySelector('.review-experiencia-div-error');
    const errorReviewTitulo = document.querySelector('.review-titulo-div-error');
    const errorReviewDescripcion = document.querySelector('.review-descripcion-div-error');

    const msgErrorReviewDestino = document.querySelector('.review-destino-div-error p');
    const msgErrorReviewExperiencia = document.querySelector('.review-experiencia-div-error p');
    const msgErrorReviewTitulo = document.querySelector('.review-titulo-div-error p');
    const msgErrorReviewDescripcion = document.querySelector('.review-descripcion-div-error p');


    const form = document.getElementById('feedback');
    const btn = document.getElementById('btn');


    let errores = {
        todoOkDestino: 'No',
        todoOkExperiencia: 'No',
        todoOkTitulo: 'No',
        todoOkDescripcion: 'No'
    };

    reviewDestino.addEventListener('blur', () => {
		errorBackReviewDestino != null
			? (errorBackReviewDestino.style.display = 'none')
			: null;

		if (
			reviewDestino.value === '' ||
			reviewDestino.value === undefined
		) {
			errores.reviewDestino = 'Tienes que completar con el destino de tu aventura';
			reviewDestino.classList.add('is-invalid');
            iconReviewDestino.classList.add('is-invalid');
			errorReviewDestino.style.display = 'block';
			msgErrorReviewDestino.innerText = errores.reviewDestino;
		} else if (reviewDestino.value.length < 2) {
			errores.reviewDestino = 'Tiene que ser mayor a dos letras';
            reviewDestino.classList.add('is-invalid');
            iconReviewDestino.classList.add('is-invalid');
			errorReviewDestino.style.display = 'block';
			msgErrorReviewDestino.innerText = errores.reviewDestino;
		} else {
			delete errores.reviewDestino;
			errores.todoOkDestino = 'Ok';
			reviewDestino.classList.remove('is-invalid');
            iconReviewDestino.classList.remove('is-invalid');
			errorReviewDestino.style.display = 'none';
		}
	});


    reviewExperiencia.addEventListener('blur', () => {
        errorBackReviewExperiencia != null
			? (errorBackReviewExperiencia.style.display = 'none')
			: null;

        if (
			reviewExperiencia.value === '' ||
			reviewExperiencia.value === undefined
		) {
			errores.reviewExperiencia = 'Tienes que completar con el destino de tu aventura';
			reviewExperiencia.classList.add('is-invalid');
            iconReviewExperiencia.classList.add('is-invalid');
			errorReviewExperiencia.style.display = 'block';
			msgErrorReviewExperiencia.innerText = errores.reviewExperiencia;
		}  else {
			delete errores.reviewExperiencia;
			errores.todoOkExperiencia = 'Ok';
			reviewExperiencia.classList.remove('is-invalid');
            iconReviewExperiencia.classList.remove('is-invalid');
			errorReviewExperiencia.style.display = 'none';
		}
        
    })


    reviewTitulo.addEventListener('blur', () => {
        errorBackReviewTitulo != null
            ? (errorBackReviewTitulo.style.display = 'none')
            : null;
        
        if (
			reviewTitulo.value === '' ||
			reviewTitulo.value === undefined
		) {
			errores.reviewTitulo = 'Tienes que ponerle un titulo a tu aventura';
			reviewTitulo.classList.add('is-invalid');
            iconReviewTitulo.classList.add('is-invalid');
			errorReviewTitulo.style.display = 'block';
			msgErrorReviewTitulo.innerText = errores.reviewTitulo;
		} else if (reviewTitulo.value.length < 2) {
			errores.reviewTitulo = 'Tiene que ser mayor a dos letras';
            reviewTitulo.classList.add('is-invalid');
            iconReviewTitulo.classList.add('is-invalid');
			errorReviewTitulo.style.display = 'block';
			msgErrorReviewTitulo.innerText = errores.reviewTitulo;
		} else if (reviewTitulo.value.length > 40) {
			errores.reviewTitulo = 'El titulo no puede tener mas de 40 caracteres';
            reviewTitulo.classList.add('is-invalid');
            iconReviewTitulo.classList.add('is-invalid');
			errorReviewTitulo.style.display = 'block';
			msgErrorReviewTitulo.innerText = errores.reviewTitulo;
		} else {
            delete errores.reviewTitulo;
			errores.todoOkTitulo = 'Ok';
			reviewTitulo.classList.remove('is-invalid');
            iconReviewTitulo.classList.remove('is-invalid');
			errorReviewTitulo.style.display = 'none';
        }
        
    })


    reviewDescripcion.addEventListener('blur', () => {
		errorBackReviewDescripcion != null
			? (errorBackReviewDescripcion.style.display = 'none')
			: null;

		if (
			reviewDescripcion.value === '' ||
			reviewDescripcion.value === undefined
		) {
			errores.reviewDescripcion = 'Tienes que hacer una descripcion de tu aventura';
			reviewDescripcion.classList.add('is-invalid');
            iconReviewDescripcion.classList.add('is-invalid');
			errorReviewDescripcion.style.display = 'block';
			msgErrorReviewDescripcion.innerText = errores.reviewDescripcion;
		} else if (reviewDescripcion.value.length < 2) {
			errores.reviewDescripcion = 'Tiene que ser mayor a dos letras';
            reviewDescripcion.classList.add('is-invalid');
            iconReviewDescripcion.classList.add('is-invalid');
			errorReviewDescripcion.style.display = 'block';
			msgErrorReviewDescripcion.innerText = errores.reviewDescripcion;
		} else {
			delete errores.reviewDescripcion;
			errores.todoOkDescripcion = 'Ok';
			reviewDescripcion.classList.remove('is-invalid');
            iconReviewDescripcion.classList.remove('is-invalid');
			errorReviewDescripcion.style.display = 'none';
		}
	});
   


    btn.addEventListener('click', (e) => {
        if (
            errores.reviewDestino || 
            errores.reviewExperiencia || 
            errores.reviewTitulo || 
            errores.reviewDescripcion) {
            e.preventDefault();
        } else if (
            errores.todoOkDestino == 'No' || 
            errores.todoOkExperiencia == 'No' ||
            errores.todoOkTitulo== 'No' ||
            errores.todoOkDescripcion == 'No') {
            e.preventDefault();
        } else {
            form.submit();
        }

    });



})