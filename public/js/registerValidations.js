document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('load', () => {

        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const userNameInput = document.getElementById('userName');
        const emailInput = document.getElementById('email');
        const emailRespaldoInput = document.getElementById('emailRespaldo');
        const passwordInput = document.getElementById('password');
        const password2Input = document.getElementById('password2');
        const avatarInput = document.getElementById('avatar')
        const birthdayInput = document.getElementById('birthday')
        const dniInput = document.getElementById('dni')
        const generoInput = document.getElementById('genero-register')
        const phoneNumberInput = document.getElementById('phoneNumber')
        const phoneNumberRespaldoInput = document.getElementById('phoneNumberRespaldo')
        const provinciaInput = document.getElementById('provincia')
        const municipioInput = document.getElementById('municipio')
        const ciudadInput = document.getElementById('ciudad')
        const calleInput = document.getElementById('calle')
        const numeroViviendaInput = document.getElementById('numeroVivienda')
        const codigoPostalInput = document.getElementById('codigoPostal')


        const errorBackFirstName = document.getElementById('error-back-user-first-name')
        const errorBackLastName = document.getElementById('error-back-user-last-name')
        const errorBackUserName = document.getElementById('error-back-user-user-name')
        const errorBackEmail = document.getElementById('error-back-user-email')
        const errorBackEmailRespaldo = document.getElementById('error-back-user-email-respaldo')
        const errorBackPassword = document.getElementById('error-back-user-password')
        const errorBackAvatar = document.getElementById('error-back-user-avatar')
        const errorBackBirthday = document.getElementById('error-back-user-birthday')
        const errorBackDni = document.getElementById('error-back-user-dni')
        const errorBackGenero = document.getElementById('error-back-user-genero')
        const errorBackPhoneNumber = document.getElementById('error-back-user-phone-number')
        const errorBackPhoneNumberRespaldo = document.getElementById('error-back-user-phone-number-respaldo')
        const errorBackProvincia = document.getElementById('error-back-user-provincia')
        const errorBackMunicipio = document.getElementById('error-back-user-municipio')
        const errorBackCiudad = document.getElementById('error-back-user-ciudad')
        const errorBackCalle = document.getElementById('error-back-user-calle')
        const errorBackNumeroVivienda = document.getElementById('error-back-user-numero-vivienda')
        const errorBackCodigoPostal = document.getElementById('error-back-user-codigo-postal')


        const errorFirstName = document.querySelector('.user-first-name')
        const errorLastName = document.querySelector('.user-last-name')
        const errorUserName = document.querySelector('.user-user-name')
        const errorEmail = document.querySelector('.user-email')
        const errorEmailRespaldo = document.querySelector('.user-email-respaldo')
        const errorPassword = document.querySelector('.user-password')
        const errorPassword2 = document.querySelector('.user-password-2')
        const errorAvatar = document.querySelector('.user-avatar')
        const errorBirthday = document.querySelector('.user-birthday')
        const errorDni = document.querySelector('.user-dni')
        const errorGenero = document.querySelector('.user-genero')
        const errorPhoneNumber = document.querySelector('.user-phone-number')
        const errorPhoneNumberRespaldo = document.querySelector('.user-phone-number-respaldo')
        const errorProvincia = document.querySelector('.user-provincia')
        const errorMunicipio = document.querySelector('.user-municipio')
        const errorCiudad = document.querySelector('.user-ciudad')
        const errorCalle = document.querySelector('.user-calle')
        const errorNumeroVivienda = document.querySelector('.user-numero-vivienda')
        const errorCodigoPostal = document.querySelector('.user-codigo-postal')

        const msgErrorFirstName = document.querySelector('.user-first-name p')
        const msgErrorLastName = document.querySelector('.user-last-name p')
        const msgErrorUserName = document.querySelector('.user-user-name p')
        const msgErrorEmail = document.querySelector('.user-email p')
        const msgErrorEmailRespaldo = document.querySelector('.user-email-respaldo p')
        const msgErrorPassword = document.querySelector('.user-password p')
        const msgErrorPassword2 = document.querySelector('.user-password-2 p')
        const msgErrorAvatar = document.querySelector('.user-avatar p')
        const msgErrorBirthday = document.querySelector('.user-birthday p')
        const msgErrorDni = document.querySelector('.user-dni p')
        const msgErrorGenero = document.querySelector('.user-genero p')
        const msgErrorPhoneNumber = document.querySelector('.user-phone-number p')
        const msgErrorPhoneNumberRespaldo = document.querySelector('.user-phone-number-respaldo p')
        const msgErrorProvincia = document.querySelector('.user-provincia p')
        const msgErrorMunicipio = document.querySelector('.user-municipio p')
        const msgErrorCiudad = document.querySelector('.user-ciudad p')
        const msgErrorCalle = document.querySelector('.user-calle p')
        const msgErrorNumeroVivienda = document.querySelector('.user-numero-vivienda p')
        const msgErrorCodigoPostal = document.querySelector('.user-codigo-postal p')


        errorFirstName.style.display = 'none'
        errorLastName.style.display = 'none'
        errorUserName.style.display = 'none'
        errorEmail.style.display = 'none'
        errorEmailRespaldo.style.display = 'none'
        errorPassword.style.display = 'none'
        errorPassword2.style.display = 'none'
        errorAvatar.style.display = 'none'
        errorBirthday.style.display = 'none'
        errorDni.style.display = 'none'
        errorGenero.style.display = 'none'
        errorPhoneNumber.style.display = 'none'
        errorPhoneNumberRespaldo.style.display = 'none'
        errorProvincia.style.display = 'none'
        errorMunicipio.style.display = 'none'
        errorCiudad.style.display = 'none'
        errorCalle.style.display = 'none'
        errorNumeroVivienda.style.display = 'none'
        errorCodigoPostal.style.display = 'none'


        


        const form = document.getElementById('form-create-user');
        const btn = document.getElementById('btn');  
        
        
        let errores = {
            todoOkFirstName: 'No',
            todoOkLastName: 'No',
            todoOkUserName: 'No',
            todoOkEmail: 'No',
            todoOkEmailRespaldo: 'No',
            todoOkPassword: 'No',
            todoOkPassword2: 'No',
            todoOkBirthday: 'No',
            todoOkDni: 'No',
            todoOkGenero: 'No',
            todoOkPhoneNumber: 'No',
            todoOkPhoneNumberRespaldo: 'No',
            todoOkProvincia: 'No',
            todoOkMunicipio: 'No',
            todoOkCiudad: 'No',
            todoOkCalle: 'No',
            todoOkNumeroVivienda: 'No',
            todoOkCodigoPostal: 'No'
        };


        if (
            firstNameInput.value.length > 0
        ) {
            errores.todoOkFirstName = 'Ok'
        }

        if (
            lastNameInput.value.length > 0
        ) {
            errores.todoOkLastName = 'Ok'
        }

        if (
            userNameInput.value.length > 0
        ) {
            errores.todoOkUserName = 'Ok'
        }
        if (
            emailInput.value.length > 0
        ) {
            errores.todoOkEmail = 'Ok'
        }
        if (
            emailRespaldoInput.value.length > 0
        ) {
            errores.todoOkEmailRespaldo = 'Ok'
        }
        if (
            passwordInput.value.length > 0
        ) {
            errores.todoOkPassword = 'Ok'
        }
        if (
            password2Input.value.length > 0
        ) {
            errores.todoOkPassword2 = 'Ok'
        }
        if (
            birthdayInput.value.length > 0
        ) {
            errores.todoOkBirthday = 'Ok'
        }
        if (
            dniInput.value.length > 0
        ) {
            errores.todoOkDni = 'Ok'
        }
        if (
            generoInput.value.length > 0
        ) {
            errores.todoOkGenero = 'Ok'
        }
        if (
            phoneNumberInput.value.length > 0
        ) {
            errores.todoOkPhoneNumber = 'Ok'
        }
        if (
            phoneNumberRespaldoInput.value.length > 0
        ) {
            errores.todoOkPhoneNumberRespaldo = 'Ok'
        }
        if (
            provinciaInput.value.length > 0
        ) {
            errores.todoOkProvincia = 'Ok'
        }
        if (
            municipioInput.value.length > 0
        ) {
            errores.todoOkMunicipio = 'Ok'
        }
        if (
            ciudadInput.value.length > 0
        ) {
            errores.todoOkCiudad = 'Ok'
        }
        if (
            calleInput.value.length > 0
        ) {
            errores.todoOkCalle = 'Ok'
        }
        if (
            numeroViviendaInput.value.length > 0
        ) {
            errores.todoOkNumeroVivienda = 'Ok'
        }
        if (
            codigoPostalInput.value.length > 0
        ) {
            errores.todoOkCodigoPostal = 'Ok'
        }

    

        avatarInput.value = ''

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

        avatarInput.addEventListener('blur', () => {    
            errorBackAvatar != null
                ? (errorBackAvatar.style.display = 'none')
                : null;
            
                
            if (
                avatarInput.files.length > 0
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

                for (let i = 0; i < avatarInput.files.length; i++) {
                    if (validIMGType.includes(avatarInput.files[i].type)) {
                        invalidType = true;
                    } else {
                        invalidType = false;
                        break;
                    }
                }


                if (invalidType == false) {
                    errores.avatar = `Las extensiones tienen que ser ${validExtension.join(', ')}`;
                    errorAvatar.style.display = 'block';
                    msgErrorAvatar.innerText = errores.avatar;
                    divImagenes.style.display = 'none'
                } else {
                    delete errores.avatar;
                    errores.todoOkAvatar = 'Ok';
                    errorAvatar.style.display = 'none';
    
                    mostrarImg()
                }  
            } 
        })

        const divContenedorTodo = document.querySelector('.foto-de-perfil-user');
        const labelContenedorTodo = document.querySelector('.label-foto-de-perfil-user')


        let divContenedorImg = document.createElement('div')
        divContenedorImg.classList.add('foto-de-perfil-user-div')

        function mostrarImg () {
            divContenedorImg.innerHTML = ''
            if (avatarInput.files.length > 0) {


                let imagenesArray = avatarInput.files
                
                const element = URL.createObjectURL(imagenesArray[0])

                const imagenElemento = document.createElement('img')
                imagenElemento.setAttribute('class', 'foto-de-perfil-info') 

                imagenElemento.src = element;
                
                
                divContenedorImg.appendChild(imagenElemento)
                labelContenedorTodo.appendChild(divContenedorImg)
                divContenedorTodo.appendChild(labelContenedorTodo)
				
                divContenedorTodo.style.display = 'block'

            }
        }


        firstNameInput.addEventListener('blur', () => {
            errorBackFirstName != null
                ? (errorBackFirstName.style.display = 'none')
                : null;

            if (
                firstNameInput.value === '' ||
                firstNameInput.value === undefined
            ) {
                errores.firstName = 'Tienes que completar con tu nombre';
                firstNameInput.classList.add('is-invalid');
                errorFirstName.style.display = 'block';
                msgErrorFirstName.innerText = errores.firstName;
            } else if (firstNameInput.value.length < 2) {
                errores.firstName = 'Tiene que ser mayor a 2 caracteres';
                firstNameInput.classList.add('is-invalid');
                errorFirstName.style.display = 'block';
                msgErrorFirstName.innerText = errores.firstName;
            } else if (firstNameInput.value.length > 100) {
                errores.firstName = 'Tiene que ser menor a 100 caracteres';
                firstNameInput.classList.add('is-invalid');
                errorFirstName.style.display = 'block';
                msgErrorFirstName.innerText = errores.firstName;
            } else {
                delete errores.firstName;
                errores.todoOkFirstName = 'Ok';
                firstNameInput.classList.remove('is-invalid');
                errorFirstName.style.display = 'none';
            }
        })


        
        lastNameInput.addEventListener('blur', () => {
            errorBackLastName != null
                ? (errorBackLastName.style.display = 'none')
                : null;

            if (
                lastNameInput.value === '' ||
                lastNameInput.value === undefined
            ) {
                errores.lastName = 'Tienes que completar con tu apellido';
                lastNameInput.classList.add('is-invalid');
                errorLastName.style.display = 'block';
                msgErrorLastName.innerText = errores.lastName;
            } else if (lastNameInput.value.length < 2) {
                errores.lastName = 'Tiene que ser mayor a 2 caracteres';
                lastNameInput.classList.add('is-invalid');
                errorLastName.style.display = 'block';
                msgErrorLastName.innerText = errores.lastName;
            } else if (lastNameInput.value.length > 100) {
                errores.lastName = 'Tiene que ser menor a 100 caracteres';
                lastNameInput.classList.add('is-invalid');
                errorLastName.style.display = 'block';
                msgErrorLastName.innerText = errores.lastName;
            }  else {
                delete errores.lastName;
                errores.todoOkLastName= 'Ok';
                lastNameInput.classList.remove('is-invalid');
                errorLastName.style.display = 'none';
            }
        })


        userNameInput.addEventListener('blur', () => {
            errorBackUserName != null
                ? (errorBackUserName.style.display = 'none')
                : null;

            if (
                userNameInput.value === '' ||
                userNameInput.value === undefined
            ) {
                errores.userName = 'Tienes que elegir un nombre de usuario';
                userNameInput.classList.add('is-invalid');
                errorUserName.style.display = 'block';
                msgErrorUserName.innerText = errores.userName;
            } else if (userNameInput.value.length < 4) {
                errores.userName = 'Tu nombre de usuario tiene que ser mayor de 4 caracteres';
                userNameInput.classList.add('is-invalid');
                errorUserName.style.display = 'block';
                msgErrorUserName.innerText = errores.userName;
            } else if (userNameInput.value.length > 15) {
                errores.userName = 'Tu nombre de usuario tiene que ser menor de 15 caracteres';
                userNameInput.classList.add('is-invalid');
                errorUserName.style.display = 'block';
                msgErrorUserName.innerText = errores.userName;
            } else {
                delete errores.userName;
                errores.todoOkUserName= 'Ok';
                userNameInput.classList.remove('is-invalid');
                errorUserName.style.display = 'none';
            }
        })



        emailInput.addEventListener('blur', () => {
            errorBackEmail != null
                ? (errorBackEmail.style.display = 'none')
                : null;

            if (
                emailInput.value === '' ||
                emailInput.value === undefined
            ) {
                errores.email = 'Tienes que completar con tu email';
                emailInput.classList.add('is-invalid');
                errorEmail.style.display = 'block';
                msgErrorEmail.innerText = errores.email;
            } else if (!(emailInput.value.includes('@'))) {
                errores.email = 'Tienes que ser un correo electronico valido';
                emailInput.classList.add('is-invalid');
                errorEmail.style.display = 'block';
                msgErrorEmail.innerText = errores.email;
            } else if (!(emailInput.value.includes('.com'))) {
                errores.email = 'Tienes que ser un correo electronico valido';
                emailInput.classList.add('is-invalid');
                errorEmail.style.display = 'block';
                msgErrorEmail.innerText = errores.email;
            } else {
                delete errores.email;
                errores.todoOkEmail = 'Ok';
                emailInput.classList.remove('is-invalid');
                errorEmail.style.display = 'none';
            }
        })


        emailRespaldoInput.addEventListener('blur', () => {
            errorBackEmailRespaldo != null
                ? (errorBackEmailRespaldo.style.display = 'none')
                : null;

            if (
                emailRespaldoInput.value === '' ||
                emailRespaldoInput.value === undefined
            ) {
                errores.emailRespaldo = 'Tienes que completar con tu email';
                emailRespaldoInput.classList.add('is-invalid');
                errorEmailRespaldo.style.display = 'block';
                msgErrorEmailRespaldo.innerText = errores.emailRespaldo;
            } else if (emailRespaldoInput.value === emailInput.value) {
                errores.emailRespaldo = 'El email de respaldo tiene que ser distinto al email';
                emailRespaldoInput.classList.add('is-invalid');
                errorEmailRespaldo.style.display = 'block';
                msgErrorEmailRespaldo.innerText = errores.emailRespaldo;
            } else if (!(emailRespaldoInput.value.includes('@'))) {
                errores.emailRespaldo = 'Tienes que ser un correo electronico valido';
                emailRespaldoInput.classList.add('is-invalid');
                errorEmailRespaldo.style.display = 'block';
                msgErrorEmailRespaldo.innerText = errores.emailRespaldo;
            } else if (!(emailRespaldoInput.value.includes('.com'))) {
                errores.emailRespaldo = 'Tienes que ser un correo electronico valido';
                emailRespaldoInput.classList.add('is-invalid');
                errorEmailRespaldo.style.display = 'block';
                msgErrorEmailRespaldo.innerText = errores.emailRespaldo;
            } else {
                delete errores.emailRespaldo;
                errores.todoOkEmailRespaldo = 'Ok';
                emailRespaldoInput.classList.remove('is-invalid');
                errorEmailRespaldo.style.display = 'none';
            }
        })




    
        passwordInput.addEventListener('blur', () => {
            errorBackPassword != null
                ? (errorBackPassword.style.display = 'none')
                : null;
    
            if (
                passwordInput.value === '' ||
                passwordInput.value === undefined
            ) {
                errores.password = 'Tienes que poner una contraseña nueva';
                passwordInput.classList.add('is-invalid');
                errorPassword.style.display = 'block';
                msgErrorPassword.innerText = errores.password;
            } else if (passwordInput.value.length < 6) {
                errores.password = 'La contraseña tiene que tener mas de 6 caracteres';
                passwordInput.classList.add('is-invalid');
                errorPassword.style.display = 'block';
                msgErrorPassword.innerText = errores.password;
            } else if (password2Input.value != '') {
                if (passwordInput.value !== password2Input.value) {
                    errores.password = 'La contraseña es distinta, pruebe otra vez';
                    passwordInput.classList.add('is-invalid');
                    errorPassword.style.display = 'block';
                    msgErrorPassword.innerText = errores.password;
                } else {
                    delete errores.password;
                    errores.todoOkPassword = 'Ok';
                    passwordInput.classList.remove('is-invalid');
                    errorPassword.style.display = 'none';
    
                    delete errores.password2;
                    errores.todoOkPassword2 = 'Ok';
                    password2Input.classList.remove('is-invalid');
                    errorPassword2.style.display = 'none';
                }
            } else {
                delete errores.password;
                errores.todoOkPassword = 'Ok';
                passwordInput.classList.remove('is-invalid');
                errorPassword.style.display = 'none';
            }
        });





        password2Input.addEventListener('blur', () => {
            if (
                password2Input.value === '' ||
                password2Input.value === undefined
            ) {
                errores.password2 = 'Tienes que poner una contraseña nueva';
                password2Input.classList.add('is-invalid');
                errorPassword2.style.display = 'block';
                msgErrorPassword2.innerText = errores.password2;
            } else if (password2Input.value.length < 6) {
                errores.password2 = 'La contraseña tiene que tener mas de 6 caracteres';
                password2Input.classList.add('is-invalid');
                errorPassword2.style.display = 'block';
                msgErrorPassword2.innerText = errores.password2;
            } else if (passwordInput.value != '') {
                if (password2Input.value != passwordInput.value) {
                    errores.password2 = 'La contraseña es distinta, pruebe otra vez';
                    password2Input.classList.add('is-invalid');
                    errorPassword2.style.display = 'block';
                    msgErrorPassword2.innerText =
                    errores.password2;
                } else {
                    delete errores.password;
                    errores.todoOkPassword = 'Ok';
                    passwordInput.classList.remove('is-invalid');
                    errorPassword.style.display = 'none';
    
                    delete errores.password2;
                    errores.todoOkPassword2 = 'Ok';
                    password2Input.classList.remove('is-invalid');
                    errorPassword2.style.display = 'none';
                }
            } else {
                delete errores.password2;
                errores.todoOkPassword2 = 'Ok';
                password2Input.classList.remove('is-invalid');
                errorPassword2.style.display = 'none';
            }
        });
    











        birthdayInput.addEventListener('blur', () => {
            errorBackBirthday != null
                ? (errorBackBirthday.style.display = 'none')
                : null;

            if (
                birthdayInput.value === '' ||
                birthdayInput.value === undefined
            ) {
                errores.birthday = 'Tienes que completar con tu fecha de nacimiento';
                birthdayInput.classList.add('is-invalid');
                errorBirthday.style.display = 'block';
                msgErrorBirthday.innerText = errores.birthday;
            } else {

                function calcularEdad(value) {
                    let fechaDeNacimiento = new Date(value);
    
    
                    let hoy = new Date();
    
                    let edad = hoy.getFullYear() - fechaDeNacimiento.getFullYear();
                    let m = hoy.getMonth() - fechaDeNacimiento.getMonth();
    
                    if (
                        m < 0 ||
                        (m === 0 && hoy.getDate() < fechaDeNacimiento.getDate())
                    ) {
                        edad--;
                    }
                    return edad;
                }
    
                let edad = calcularEdad(birthdayInput.value);
                if (edad < 18) {
                    errores.birthday = 'Tienes que ser mayor de edad';
                    birthdayInput.classList.add('is-invalid');
                    errorBirthday.style.display = 'block';
                    msgErrorBirthday.innerText = errores.birthday;
                } else {
                    delete errores.birthday;
                    errores.todoOkBirthday= 'Ok';
                    birthdayInput.classList.remove('is-invalid');
                    errorBirthday.style.display = 'none';
                }

            }

        })


        dniInput.addEventListener('blur', () => {
            errorBackDni != null
                ? (errorBackDni.style.display = 'none')
                : null;

            if (
                dniInput.value === '' ||
                dniInput.value === undefined
            ) {
                errores.dni = 'Tienes que completar con tu dni';
                dniInput.classList.add('is-invalid');
                errorDni.style.display = 'block';
                msgErrorDni.innerText = errores.dni;
            } else if (!Number(dniInput.value)) {
                errores.dni = 'Esto no es un dni';
                dniInput.classList.add('is-invalid');
                errorDni.style.display = 'block';
                msgErrorDni.innerText = errores.dni;
            } else if (dniInput.value.length != 8) {
                errores.dni = 'Esto no es un dni';
                dniInput.classList.add('is-invalid');
                errorDni.style.display = 'block';
                msgErrorDni.innerText = errores.dni;
            } else {
                delete errores.dni;
                errores.todoOkDni= 'Ok';
                dniInput.classList.remove('is-invalid');
                errorDni.style.display = 'none';
            }
        })

        generoInput.addEventListener('blur', () => {
            errorBackGenero != null
                ? (errorBackGenero.style.display = 'none')
                : null;

            if (
                generoInput.value === '' ||
                generoInput.value === undefined
            ) {
                errores.genero = 'Debes elegir tu genero';
                generoInput.classList.add('is-invalid');
                errorGenero.style.display = 'block';
                msgErrorGenero.innerText = errores.genero;
            } else {
                delete errores.genero;
                errores.todoOkGenero= 'Ok';
                generoInput.classList.remove('is-invalid');
                errorGenero.style.display = 'none';
            }

        })

        phoneNumberInput.addEventListener('blur', () => {
            errorBackPhoneNumber != null
                ? (errorBackPhoneNumber.style.display = 'none')
                : null;

            if (
                phoneNumberInput.value === '' ||
                phoneNumberInput.value === undefined
            ) {
                errores.phoneNumber = 'Tienes que poner tu número de telefono';
                phoneNumberInput.classList.add('is-invalid');
                errorPhoneNumber.style.display = 'block';
                msgErrorPhoneNumber.innerText = errores.phoneNumber;
            } else if (!Number(phoneNumberInput.value)) {
                errores.phoneNumber = 'Tienes que poner un número de telefono';
                phoneNumberInput.classList.add('is-invalid');
                errorPhoneNumber.style.display = 'block';
                msgErrorPhoneNumber.innerText = errores.phoneNumber;
            } else if (phoneNumberInput.value.length != 13) {
                errores.phoneNumber = 'Un numero de telefono tiene 13 numeros';
                phoneNumberInput.classList.add('is-invalid');
                errorPhoneNumber.style.display = 'block';
                msgErrorPhoneNumber.innerText = errores.phoneNumber;
            } else if (parseInt(phoneNumberInput.value) < 0) {
                errores.phoneNumber = 'Esto no es un numero de telefono';
                phoneNumberInput.classList.add('is-invalid');
                errorPhoneNumber.style.display = 'block';
                msgErrorPhoneNumber.innerText = errores.phoneNumber;
            } else {
                delete errores.phoneNumber;
                errores.todoOkPhoneNumber = 'Ok';
                phoneNumberInput.classList.remove('is-invalid');
                errorPhoneNumber.style.display = 'none';
            }
        })

        phoneNumberRespaldoInput.addEventListener('blur', () => {
            errorBackPhoneNumberRespaldo != null
                ? (errorBackPhoneNumberRespaldo.style.display = 'none')
                : null;

            if (
                phoneNumberRespaldoInput.value === '' ||
                phoneNumberRespaldoInput.value === undefined
            ) {
                errores.phoneNumberRespaldo = 'Tienes que poner tu número de telefono';
                phoneNumberRespaldoInput.classList.add('is-invalid');
                errorPhoneNumberRespaldo.style.display = 'block';
                msgErrorPhoneNumberRespaldo.innerText = errores.phoneNumberRespaldo;
            } else if (phoneNumberRespaldoInput.value === phoneNumberInput.value) {
                errores.phoneNumberRespaldo = 'El numero de respaldo tiene que ser distinto';
                phoneNumberRespaldoInput.classList.add('is-invalid');
                errorPhoneNumberRespaldo.style.display = 'block';
                msgErrorPhoneNumberRespaldo.innerText = errores.phoneNumberRespaldo;
            } else if (!Number(phoneNumberRespaldoInput.value)) {
                errores.phoneNumberRespaldo = 'Tienes que poner un número de telefono';
                phoneNumberRespaldoInput.classList.add('is-invalid');
                errorPhoneNumberRespaldo.style.display = 'block';
                msgErrorPhoneNumberRespaldo.innerText = errores.phoneNumberRespaldo;
            } else if (phoneNumberRespaldoInput.value.length != 13) {
                errores.phoneNumberRespaldo = 'Un numero de telefono tiene 13 numeros';
                phoneNumberRespaldoInput.classList.add('is-invalid');
                errorPhoneNumberRespaldo.style.display = 'block';
                msgErrorPhoneNumberRespaldo.innerText = errores.phoneNumberRespaldo;
            } else if (parseInt(phoneNumberRespaldoInput.value) < 0) {
                errores.phoneNumberRespaldo = 'Esto no es un numero de telefono';
                phoneNumberRespaldoInput.classList.add('is-invalid');
                errorPhoneNumberRespaldo.style.display = 'block';
                msgErrorPhoneNumberRespaldo.innerText = errores.phoneNumberRespaldo;
            } else {
                delete errores.phoneNumberRespaldo;
                errores.todoOkPhoneNumberRespaldo = 'Ok';
                phoneNumberRespaldoInput.classList.remove('is-invalid');
                errorPhoneNumberRespaldo.style.display = 'none';
            }
        })



        provinciaInput.addEventListener('blur', () => {
            errorBackProvincia != null
                ? (errorBackProvincia.style.display = 'none')
                : null;

            if (
                provinciaInput.value === '' ||
                provinciaInput.value === undefined
            ) {
                errores.provincia = 'Tienes que poner la provincia en donde vives';
                provinciaInput.classList.add('is-invalid');
                errorProvincia.style.display = 'block';
                msgErrorProvincia.innerText = errores.provincia;
            } else {
                delete errores.provincia;
                errores.todoOkProvincia= 'Ok';
                provinciaInput.classList.remove('is-invalid');
                errorProvincia.style.display = 'none';
            }
        })




        municipioInput.addEventListener('blur', () => {
            errorBackMunicipio != null
                ? (errorBackMunicipio.style.display = 'none')
                : null;

            if (
                municipioInput.value === '' ||
                municipioInput.value === undefined
            ) {
                errores.municipio = 'Tienes que poner el municipio en donde vives';
                municipioInput.classList.add('is-invalid');
                errorMunicipio.style.display = 'block';
                msgErrorMunicipio.innerText = errores.municipio;
            } else if (municipioInput.value.length < 2) {
                errores.municipio = 'Tiene que ser mayor a 2 caracteres';
                municipioInput.classList.add('is-invalid');
                errorMunicipio.style.display = 'block';
                msgErrorMunicipio.innerText = errores.municipio;
            } else if (municipioInput.value.length > 100) {
                errores.municipio = 'Tiene que ser menor a 100 caracteres';
                municipioInput.classList.add('is-invalid');
                errorMunicipio.style.display = 'block';
                msgErrorMunicipio.innerText = errores.municipio;
            } else {
                delete errores.municipio;
                errores.todoOkMunicipio = 'Ok';
                municipioInput.classList.remove('is-invalid');
                errorMunicipio.style.display = 'none';
            }
        })

        ciudadInput.addEventListener('blur', () => {
            errorBackCiudad != null
                ? (errorBackCiudad.style.display = 'none')
                : null;

            if (
                ciudadInput.value === '' ||
                ciudadInput.value === undefined
            ) {
                errores.ciudad = 'Tienes que poner la ciudad en donde vives';
                ciudadInput.classList.add('is-invalid');
                errorCiudad.style.display = 'block';
                msgErrorCiudad.innerText = errores.ciudad;
            } else if (ciudadInput.value.length < 2) {
                errores.ciudad = 'Tiene que ser mayor a 2 caracteres';
                ciudadInput.classList.add('is-invalid');
                errorCiudad.style.display = 'block';
                msgErrorCiudad.innerText = errores.ciudad;
            } else if (ciudadInput.value.length > 100) {
                errores.ciudad = 'Tiene que ser menor a 100 caracteres';
                ciudadInput.classList.add('is-invalid');
                errorCiudad.style.display = 'block';
                msgErrorCiudad.innerText = errores.ciudad;
            } else {
                delete errores.ciudad;
                errores.todoOkCiudad = 'Ok';
                ciudadInput.classList.remove('is-invalid');
                errorCiudad.style.display = 'none';
            }
        })

        calleInput.addEventListener('blur', () => {
            errorBackCalle != null
                ? (errorBackCalle.style.display = 'none')
                : null;

            if (
                calleInput.value === '' ||
                calleInput.value === undefined
            ) {
                errores.calle = 'Tienes que poner la calle en donde vives';
                calleInput.classList.add('is-invalid');
                errorCalle.style.display = 'block';
                msgErrorCalle.innerText = errores.calle;
            } else if (calleInput.value.length < 2) {
                errores.calle = 'Tiene que ser mayor a 2 caracteres';
                calleInput.classList.add('is-invalid');
                errorCalle.style.display = 'block';
                msgErrorCalle.innerText = errores.calle;
            } else if (calleInput.value.length > 100) {
                errores.calle = 'Tiene que ser menor a 100 caracteres';
                calleInput.classList.add('is-invalid');
                errorCalle.style.display = 'block';
                msgErrorCalle.innerText = errores.calle;
            } else {
                delete errores.calle;
                errores.todoOkCalle= 'Ok';
                calleInput.classList.remove('is-invalid');
                errorCalle.style.display = 'none';
            }
        })


        numeroViviendaInput.addEventListener('blur', () => {
            errorBackNumeroVivienda != null
                ? (errorBackNumeroVivienda.style.display = 'none')
                : null;

            if (
                numeroViviendaInput.value === '' ||
                numeroViviendaInput.value === undefined
            ) {
                errores.numeroVivienda = 'Tienes que poner tu numero de vivienda';
                numeroViviendaInput.classList.add('is-invalid');
                errorNumeroVivienda.style.display = 'block';
                msgErrorNumeroVivienda.innerText = errores.numeroVivienda;
            } else if (!Number(numeroViviendaInput.value)) {
                errores.numeroVivienda = 'Tienes que poner tu numero de vivienda';
                numeroViviendaInput.classList.add('is-invalid');
                errorNumeroVivienda.style.display = 'block';
                msgErrorNumeroVivienda.innerText = errores.numeroVivienda;
            } else if (numeroViviendaInput.value < 0) {
                errores.numeroVivienda = 'No hay viviendas negativas';
                numeroViviendaInput.classList.add('is-invalid');
                errorNumeroVivienda.style.display = 'block';
                msgErrorNumeroVivienda.innerText = errores.numeroVivienda;
            } else {
                delete errores.numeroVivienda;
                errores.todoOkNumeroVivienda = 'Ok';
                numeroViviendaInput.classList.remove('is-invalid');
                errorNumeroVivienda.style.display = 'none';
            }
        })


        codigoPostalInput.addEventListener('blur', () => {
            errorBackCodigoPostal != null
                ? (errorBackCodigoPostal.style.display = 'none')
                : null;

            if (
                codigoPostalInput.value === '' ||
                codigoPostalInput.value === undefined
            ) {
                errores.codigoPostal = 'Tienes que poner tu codigo postal';
                codigoPostalInput.classList.add('is-invalid');
                errorCodigoPostal.style.display = 'block';
                msgErrorCodigoPostal.innerText = errores.codigoPostal;
            } else if (!Number(codigoPostalInput.value)) {
                errores.codigoPostal = 'Tienes que poner tu codigo postal';
                codigoPostalInput.classList.add('is-invalid');
                errorCodigoPostal.style.display = 'block';
                msgErrorCodigoPostal.innerText = errores.codigoPostal;
            } else if (codigoPostalInput.value < 0) {
                errores.codigoPostal = 'No hay codigos postales negativos';
                codigoPostalInput.classList.add('is-invalid');
                errorCodigoPostal.style.display = 'block';
                msgErrorCodigoPostal.innerText = errores.codigoPostal;
            }  else {
                delete errores.codigoPostal;
                errores.todoOkCodigoPostal= 'Ok';
                codigoPostalInput.classList.remove('is-invalid');
                errorCodigoPostal.style.display = 'none';
            }
        })


        btn.addEventListener('click', (e) => {

            if(
                errores.todoOkFirstName == 'No' ||
                errores.todoOkLastName == 'No' ||
                errores.todoOkUserName == 'No' ||
                errores.todoOkEmail == 'No' ||
                errores.todoOkEmailRespaldo == 'No' ||
                errores.todoOkPassword == 'No' ||
                errores.todoOkPassword2 == 'No' ||
                errores.todoOkBirthday == 'No' ||
                errores.todoOkDni == 'No' ||
                errores.todoOkGenero == 'No' ||
                errores. todoOkPhoneNumber == 'No' ||
                errores.todoOkPhoneNumberRespaldo == 'No' ||
                errores.todoOkProvincia == 'No' ||
                errores.todoOkMunicipio == 'No' ||
                errores.todoOkCiudad == 'No' ||
                errores.todoOkCalle == 'No' ||
                errores.todoOkNumeroVivienda == 'No' ||
                errores.todoOkCodigoPostal == 'No'
            ) {
                e.preventDefault();
            } else if (
                errores.firstName || 
                errores.lastName || 
                errores.userName || 
                errores.email || 
                errores.emailRespaldo || 
                errores.password || 
                errores.password2 || 
                errores.avatar ||  
                errores.birthday ||  
                errores.dni || 
                errores.genero || 
                errores.phoneNumber || 
                errores.phoneNumberRespaldo || 
                errores.provincia ||  
                errores.municipio || 
                errores.ciudad || 
                errores.calle || 
                errores.numeroVivienda || 
                errores.codigoPostal
            ) {
                e.preventDefault();
            } else {
                form.submit()
            }
        })


    })
})