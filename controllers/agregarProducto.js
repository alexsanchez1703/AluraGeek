import { crearProducto } from "../api/api.js"

const formAddProduct = document.querySelector(".login__form")
formAddProduct.addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = document.getElementById("url").value;
    const categoria = document.getElementById("categoria").value;
    const tittle = document.getElementById("nombre-producto").value;
    const precio = document.getElementById("precio-producto").value;
    const descripcion= document.getElementById("descripcion").value;
    try {
        if (precio && tittle) {
            if (url && categoria){
                if (descripcion){
                    console.log("proucto agregado")
                    crearProducto(precio,tittle,categoria,url,descripcion)
                    window.location.href = "../productoAgregado.html"
                }
            }
        } else {
            throw new Error();
        } 
    } catch (error) {
        window.location.href = "../error.html"
    }
})