import { detalleProducto } from "../api/api.js";
import { filtroProductos } from "./crearCards.js";

const mostrarProducto = async () => {
        const newUrl = new URL(window.location)
        const id = newUrl.searchParams.get("id")
        if( id === null ) {
            window.location.href = "../error.html";
        }
        try {
          let productoHTML = "";      
          const producto = await detalleProducto(id)   
          const { precio,tittle,url,descripcion } = producto;
                productoHTML += `
                <div class="detalle_container_img"><img src="${url}"/></div>
                <div class="detalle_producto">
                <h2>${tittle}</h2>
                <p class="detalle_producto_precio">$ ${precio}</p>
                <p class="detalle_producto_descripcion">${descripcion}</p>    
                </div> 
                `
           document.querySelector(".mostrar_producto").innerHTML = productoHTML;   

        } catch (error) {
                console.log("Error")
        }
}
mostrarProducto()


const newUrl = new URL(window.location)
const cat = newUrl.searchParams.get("categoria")
const id = newUrl.searchParams.get("id")
console.log(id)

const detalleProductoCat = async () => {
        try {
         const respuesta = await fetch ("http://localhost:5000/productos")
         const data = await respuesta.json()  
         const similar = data.filter((producto) => producto.categoria === cat && producto.id != id)
         filtroProductos(similar, "producto__card__similares")
        } catch (error) {
                console.log("error")        
        }

    }
 detalleProductoCat()
     