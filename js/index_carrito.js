function renderCursosCarrito() {
    const cursos = cargarCursosCarrito();
    let salida = "";

    if(cantidadCursosCarrito() > 0 ){
        salida += `<table class = "table">
        <tr>
        <td colspan ="4" class= "text-end"><button class= "btn btn-warning" onclick="vaciarCarrito()">vaciar carrito</button></td>
        </tr>`;
        
        for (curso of cursos){
            salida += ` <tr>
            <td><img src="${"img/" + curso.imagen}" alt="Imagen Curso" width = "100"></td>
            <td>${curso.nombre}</td>
            <td>$${curso.precio}</td>
            <td><a href= "#"><img src ="img/eliminar.png" alt="eliminar curso" width="24"/></a></td>
            </tr>`
        }
        salida+= `<tr>
        <td colspan = "2"> Total </td>
        <td> $${totalPagarCursos()} </td>
        <td>&nbsp;</td>
        </tr>`
        salida+= `</table>`

    }
    else{
        salida = `<div class="alert alert-danger" role="alert">
        No se encontraron cursos en el carrito
      </div>`
    }
   
    document.getElementById("cursos").innerHTML = salida;
}

renderCursosCarrito();
renderBotonCarrito();