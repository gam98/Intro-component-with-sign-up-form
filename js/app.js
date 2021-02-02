const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    nombre: false,
	apellido: false,
	password: false,
	correo: false,
}
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.querySelector(`.img__${campo}`).classList.remove('incorrecto');
		document.querySelector(`.p__${campo}`).classList.remove('pIconrrecto');
	} else {
		document.querySelector(`.img__${campo}`).classList.add('incorrecto');
		document.querySelector(`.p__${campo}`).classList.add('pIconrrecto');
		
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	const terminos = document.getElementById('terminos');
// 	if(campos.usuario && campos.nombre && campos.password && campos.correo){
// 		formulario.reset();
// 	}
// });