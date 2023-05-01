
import { api } from "../api/api.js"

document.addEventListener("DOMContentLoaded", () => {api()})

export const crearCards = (data) => {  
    const starwars = data.filter((producto) => producto.categoria === "Star Wars")
    filtroProductos(starwars, "producto__card__star-wars")
    const consolas = data.filter((producto) => producto.categoria === "Consolas")
    filtroProductos(consolas, "producto__card__consolas")
    const otros = data.filter((producto) => producto.categoria === "Otros")
    filtroProductos(otros, "producto__card__otros")
    filtroProductos(data,"producto__card__todos")
}    

//funcion que va a filtrar los productos dependiendo de la categoria 
export function filtroProductos (productosFiltrados, tagId) {
    let cardHTML = ""
    productosFiltrados.map((producto) => {
        const {id,precio,tittle,url,categoria} = producto
                cardHTML += `
                <li>
                <div>
                <img id=${id} class="icon-trash" src="img/trash.svg">
                <a class="enlace-editar" href="editarProducto.html?id=${id}">
                <img id=${id} class="icon-edit" src="img/edit.svg">
                </a>
                <img class="card-img" src="${url}" alt="producto1">
                </div>
                <h4>${tittle}</h4>
                <p>$ ${precio}</p>
                <a href="verProducto.html?id=${id}&categoria=${categoria}" class="boton-ver-producto">Ver producto</a>
                </li> `

    })
        document.getElementById(tagId).innerHTML += cardHTML;
}    
