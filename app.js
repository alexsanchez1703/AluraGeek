
import { validar } from "./controllers/validacion.js";

//Obtener los inputs y mensajes del HTML
     const inputs = document.querySelectorAll("input");
     const mensaje = document.querySelector(".mensajem");
     // recorre todos los inputs uno por uno y le agrega un evento blur
     //que genera un callback llamando
     // a la funcion validar 
     inputs.forEach((input) => {
         input.addEventListener('blur', (input) => {
             validar(input.target)
         })
     })
     // agrega un evento blur que genera un callaback que llama a la
     //funcion validar 
     mensaje.addEventListener('blur', (mensaje) =>{
         validar(mensaje.target);
     })   

