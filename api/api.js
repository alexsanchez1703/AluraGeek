import { crearCards } from "../controllers/crearCards.js"

export const api = async() => {
    try {
        const respuesta = await fetch ("http://localhost:5000/productos")
        const data = await respuesta.json()  
        crearCards(data)
    } catch (error) {
        console.log(error)
    }
}

export const crearProducto = (precio,tittle,categoria,url,descripcion) => {
    return fetch("http://localhost:5000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({precio,tittle,categoria,url,descripcion}),
    });
}
export const eliminarProducto = (id) => {
    return fetch(`http://localhost:5000/productos/${id}`, {
        method: "DELETE",
    }) 
}

export const detalleProducto = (id) => {
    return fetch(`http://localhost:5000/productos/${id}`).then((respuesta) => respuesta.json())
}
 
export const actulizarProdcuto = (id,precio,tittle,categoria,url,descripcion) => {
    return fetch(`http://localhost:5000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({precio,tittle,categoria,url,descripcion})
    }).then((respuesta)=>respuesta)
    .catch((error)=>console.log(error));
}
