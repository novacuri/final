let carrito = [];
let stock = [];

const tabla = document.getElementById("items");
const agregar = document.querySelector("#agregar");
const aumentar = document.querySelector("#aumentar");
const ordenar = document.getElementById("ordenar");
const vaciar = document.getElementById("vaciar");
const productosEnStock = document.getElementById("productos");


stock.push(new Producto("MTB", 1000));
stock.push(new Producto("Ruta", 1500));
stock.push(new Producto("Triatlon", 2000));



stock.forEach((producto) => {
    let option = document.createElement("option");
    option.innerText = `${producto.nombre} costo: $${producto.precio}`
    option.value = stock.indexOf(producto);
    productosEnStock.appendChild(option);
})


function newRow(item) {
    let row = document.createElement("tr");
    let pos = carrito.indexOf(item); 

    let celda = document.createElement("td");
    celda.innerText = item.producto.nombre;
    row.append(celda); 

    ///Creamos la celda Cantidad
    celda = document.createElement("td");
    celda.innerText = item.cantidad;

    ///Agregamos botones para incremento o decremento
    let botonIncremento = document.createElement("button");
    botonIncremento.className = "btn btn-primary";
    botonIncremento.innerText = "+";

    let botonDecremento = document.createElement("button");
    botonDecremento.className = "btn btn-primary";
    botonDecremento.innerText = "-";

    botonIncremento.onclick = () =>
    {
        carrito[pos].cantidad++;
        listadoUpdate();
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    botonDecremento.onclick = () =>
    {
        if (carrito[pos].cantidad > 0)
        {
            carrito[pos].cantidad--;
            listadoUpdate();
            localStorage.setItem("carrito",JSON.stringify(carrito));
        }
    }

    celda.append(botonIncremento);
    celda.append(botonDecremento);
    row.append(celda);

    ///Creamos la celda precio

    celda = document.createElement("td");
    celda.innerText = item.producto.precio;
    row.append(celda);

    ///Creamos boton eliminar
    let botonEliminar = document.createElement('button');
    botonEliminar.className = "btn btn-danger";
    botonEliminar.innerText = "Eliminar";
    
    botonEliminar.onclick = () => {
        carrito.splice(pos,1);
        listadoUpdate();
        localStorage.setItem("carrito",JSON.stringify(carrito));
    }

    celda = document.createElement("td");
    celda.append(botonEliminar);
    row.append(celda);
    tabla.append(row);

}

//Calculo del total
function calculoTotal()
{

////Sumatoria de Precio Total
total = document.getElementById("total");
total.innerText = carrito.reduce(
    (suma,item) => 
    suma + item.producto.precio*item.cantidad
    ,0);
}



// Actualizacion de la tabla
function listadoUpdate() {
    tabla.innerHTML = "";
    carrito.forEach((item) => 
    {
        newRow(item);
    });
    calculoTotal();
}


//Funcion para agregar nuevo itema al carrito
agregar.addEventListener("submit", (e) => {
    e.preventDefault();
    let producto = stock[productosEnStock.value];

    let nuevoElementoCarrito = new Item(producto,1); 
    carrito.push(nuevoElementoCarrito);
    newRow(nuevoElementoCarrito);
    calculoTotal();
    localStorage.setItem("carrito",JSON.stringify(carrito));
    
});


//Celda de multiplicador de precios

aumentar.addEventListener("submit", (e) => {
e.preventDefault();
let valor = document.getElementById("aumento").value;
if (valor > 0) 
{
    carrito = carrito.map((item) => {
        return new Item(
            new Producto(
                item.producto.nombre,
                item.producto.precio * valor
            ),
            item.cantidad
        );
    });
    listadoUpdate();
}
localStorage.setItem("carrito", JSON.stringify(carrito));
});


//Boton ordenar

ordenar.onclick = () => {
    carrito.sort((actual,siguiente) => {
        return actual.producto.nombre.localeCompare(siguiente.producto.nombre); 
    })
    listadoUpdate();
};


//Boton vaciar

vaciar.onclick = () => {
carrito  = [];


listadoUpdate();
localStorage.setItem("carrito",JSON.stringify(carrito));
};

