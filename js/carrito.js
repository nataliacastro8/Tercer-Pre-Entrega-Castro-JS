function guardarCursosCarrito(cursos){
    localStorage.setItem("carrito", JSON.stringify(cursos));
}

function cargarCursosCarrito(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

function vaciarCarrito(){
    localStorage.removeItem("carrito");
    renderCursosCarrito();
    renderBotonCarrito();
}

function agregarAlCarrito(id){
    const carrito = cargarCursosCarrito();
    const curso = buscarCurso(id);
    carrito.push(curso);
    guardarCursosCarrito(carrito);
    renderBotonCarrito();
}

function buscarCurso(id) {
    const cursos =  cargarCursosLS();

    return cursos.find (item => item.id === id);
}

function cantidadCursosCarrito () {
    const cursos = cargarCursosCarrito();
    return cursos.length; 
}

function totalPagarCursos () {
    const cursos = cargarCursosCarrito();
    return cursos.reduce((total, item) => total += item.precio,0); 
}

function renderBotonCarrito(){
    document.getElementById("carrito").innerText = cantidadCursosCarrito(); 
}

