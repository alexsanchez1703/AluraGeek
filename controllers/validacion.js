
// creamos y exportamos una funcion que valida las cajas (inputs,textarea)
export function validar (caja) {
    //creamos una constante que alamcene el tipo de caja 
    const tipoDeCaja = caja.dataset.tipo;
    console.log(tipoDeCaja)
    console.log(caja.validity)
    //Si caja.validity.valid es verdadero hacer...
    if(caja.validity.valid) {
        //Al elemento padre de caja le quitamos la classe 'input-container--invalid'
        caja.parentElement.classList.remove("input-container--invalid");
        //Obtenemos elemento padre de caja y le agregamos una sintaxis "" con innerHTML
        caja.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        //Al elemento padre de caja le agregamos la classe 'input-container--invalid'
        caja.parentElement.classList.add("input-container--invalid");
        //Obtenemos elemento padre de caja y le agregamos una sintaxis de lo que retorna la funcion 
        // mostrarMensajeDeError con innerHTML
        caja.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(caja,tipoDeCaja);
    }
}



//Creamos un objeto que contenga el tipoDeCaja y este tenga 
//el tipo de error 
const mensajesDeError = {
    nombre: {
        valueMissing: "El campo Nombre no puede estar vacio"
    },
    email: {
        valueMissing: "El campo Email no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo Contraseña no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una mayúscula, un número y no puede contener caracteres especiales."
    },
    mensaje: {
        valueMissing: "El campo Mensaje no puede estar vacio"
    },
    url: {
        valueMissing: "El campo URL de la imagen no puede estar vacio",
        typeMismatch: "La URL de la imagen no es valida"
    },
    categoria:{
        valueMissing: "El campo Categoria no puede estar vacio"
    },
    nombreProducto: {
        valueMissing: "El campo Nombre del producto no puede estar vacio"
    },
    precioProducto: {
        valueMissing: "El campo Precio del producto no puede estar vacio",
        patternMismatch: "Solo numeros mayores a 1."
    }
}
//Creamos un arreglo que contenga los tipos de errores que hay 
//en un validitystate
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
]
//Creamos una funcion que muestre el mensaje de error
//donde recibimos la caja y el tipo de caja
function mostrarMensajeDeError (caja, tipoDeCaja) {
    //instanciamos un variable mensaje en vacio
    let mensaje = "";
    //recorremos el arreglo tipoDeErrores 
    tipoDeErrores.forEach((error) => {
        //Si en caja.validity hay un error del arreglo recorrido entonces hacer...
        if(caja.validity[error]){
            //mensaje sera igual a el mensajeDeError dependiento del tipo  
            //de caja y del error
            mensaje = mensajesDeError[tipoDeCaja][error];
        }
    })
    //retornamos el mensaje
    return mensaje;
}

