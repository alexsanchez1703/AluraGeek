 
     //Traemos todos los botones que tengan la clase "btn-ver-too"
     const bntVerTodo = document.querySelectorAll(".bnt-ver-todo")
     //Recorremos cada boton agregando un evento listener

     bntVerTodo.forEach((botones) => {
         botones.addEventListener("click", (e) => {
             e.preventDefault()
             //Obtenemos los conteneores de prouctos-lista, categoria y noticias; al primero 
             //lo mostramos, al segundo y tercero los ocultamos
             document.querySelector(".ver-productos__lista").style.display = "flex"
             document.querySelector(".ver-productos__categoria").style.display = "none"
             document.querySelector(".noticias").style.display = "none"
             const trashs = document.querySelectorAll(".icon-trash")
             trashs.forEach((trash)=>{
                trash.style.display = "block"
                trash.addEventListener("click", () => {
                    const i = trash.id;
                    eliminarProducto(i).then((res) => {
                        console.log(res)
                    }).catch(err => alert("Ocurrio un error"))
                })
            })
             const edits = document.querySelectorAll(".enlace-editar") 
             edits.forEach((edit)=>edit.style.display = "block")
     
         })
     })

     const btnMostrar = document.querySelector(".ver-consolas")
     btnMostrar.addEventListener("click", (e) => {
        e.preventDefault()
        document.querySelector(".producto-card__star-wars").style.display = "none"
        document.querySelector(".producto-card__otros").style.display = "none"
     })
