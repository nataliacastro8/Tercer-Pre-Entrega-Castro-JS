function renderCursos() {
    const cursos = cargarCursosLS();
    let salida = "";

    for (curso of cursos){
        salida += `<div class="col-md-3">
            <div class="card text-center">
                <img src="${"img/" + curso.imagen}" class="card-img-top" alt="${curso.nombre}">
                <div class="card-body">
                    <h6>${curso.nombre}</h6>
                    <p class="card-text">${curso.descripcion}</p>
                    <p><button class= "btn btn-warning" onclick = "agregarAlCarrito(${curso.id})">Agregar (+)</button>
                </div>
            </div>
        </div>`;
    }
    document.getElementById("cursos").innerHTML = salida;
}

renderCursos();
renderBotonCarrito();