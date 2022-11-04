const carrito = []
const container = document.querySelector("div.container")


//Agrego evento click en todas las tarjetas
const activarBotonesAdd = ()=> { 
    const botonesAdd = document.querySelectorAll(".button.button-outline.button-add")
    botonesAdd.forEach(btn => btn.addEventListener("click", (e)=> agregarAlCarrito(e)))
}

//Recorro array y cargo tarjetas en el html
const cargarMisProductos = ()=> { 
    container.innerHTML = ""
    productos.forEach(producto => container.innerHTML += retornoCard(producto))
    activarBotonesAdd()         
}
cargarMisProductos()

//Agrego productos al carrito
const agregarAlCarrito = (e)=> { 
    let resultado = productos.find(prod => prod.nombre === e.target.id)
        if (resultado !== undefined) {
            carrito.push(resultado)
            guardarCarrito()
        }
}

const guardarCarrito = ()=> {
    if (carrito.length > 0) { localStorage.setItem("carrito", JSON.stringify(carrito)) }
}

const recuperarCarrito = ()=> {
    if (localStorage.getItem("carrito")) {
        let carritoRecuperado = JSON.parse(localStorage.getItem("carrito"))
            carritoRecuperado.forEach(producto => carrito.push(producto))
    } else {
        console.warn("No se encontró un carrito.")
    }
}
recuperarCarrito()