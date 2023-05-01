import { actulizarProdcuto, detalleProducto } from "../api/api.js"

const formEditProduct = document.querySelector("[data-form]")


const obtenerInfo = async () => {
    const newUrl = new URL(window.location)
    const id = newUrl.searchParams.get("id")

    if( id === null ) {
        window.location.href = "../error.html";
    }
    const url = document.getElementById("url");
    const categoria = document.getElementById("categoria");
    const tittle = document.getElementById("nombre-producto");
    const precio = document.getElementById("precio-producto");
    const descripcion= document.getElementById("descripcion");
    try {
        const producto = await detalleProducto(id);
        if (producto.precio && producto.tittle) {
            if (producto.url && producto.categoria){
                if (producto.descripcion){
                    url.value = producto.url;
                    categoria.value = producto.categoria;
                    tittle.value = producto.tittle;
                    precio.value = producto.precio;
                    descripcion.value = producto.descripcion;
                }
            }
        }    
    } catch (error) {
        window.location.href = "../error.html";
    }
}
obtenerInfo();

formEditProduct.addEventListener("submit", (e)=>{
    e.preventDefault()
    const newURL = new URL(window.location)
    const id = newURL.searchParams.get("id")
    const url = document.getElementById("url").value;
    const categoria = document.getElementById("categoria").value;
    const tittle = document.getElementById("nombre-producto").value;
    const precio = document.getElementById("precio-producto").value;
    const descripcion= document.getElementById("descripcion").value;
    actulizarProdcuto(id,precio,tittle,categoria,url,descripcion).then(()=>{
        window.location.href = "../edicionConcluida.html"
    })
})