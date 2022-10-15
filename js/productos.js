// CONOZCO A MI USUARIO

/* let nombre

nombre = prompt ("Hola, como te llamas?")
alert ("Genial " + nombre + " bienvenido al area de compras") */



//NIVEL DE GASTO ESPERADO AL MOMENTO DE COMPRAR

/* let numero1 
let numero2 
let resultado


numero1 = parseInt(prompt("Cuanto dinero vas a gastar en efectivo???")) 
numero2 = parseInt(prompt("Cuanto dinero vas a financiar?"))
resultado = numero1 + numero2
alert("Perfecto, buscaremos un articulo de hasta " + resultado) */


// AHORA VEMOS PARA CUANTO LE ALCANZA

/* let precio = resultado

if (precio < 20) {
alert ("Con ese monto vas a poder comprar una bicicleta de GAMA BAJA")
}

else if (precio < 50) {
    alert ("Con ese monto vas a poder comprar una bicicleta de GAMA MEDIA")
    }

else if (precio < 100) {
    alert ("Con ese monto vas a poder comprar una bicicleta de GAMA MEDIA/ALTA")
    }    

    else {
        alert ("Con ese monto vas a poder comprar una bicicleta de GAMA ALTA")
        }   */


// PERO QUE EXPECTATIVA TENIAS?

/* let queria
queria = prompt("Era eso lo que querias?")

if(queria == 'si') {
    alert("Me alegro que estes conforme")
}
else{
    alert ("Te invitamos a analizar nuestras opciones de financiacion personal")
} */

// PARA QUE LO VA A USAR? 

/* function paraque () {

let proposito = prompt ("Para que vas a utilizar lo comprado?")
alert ("Buena idea, a todos nos gusta  " + proposito)

}
paraque () */


/// METODOS

let bici = function (disciplina, marca, modelo)
{
    this.disciplina = disciplina
    this.marca = marca
    this.modelo = modelo

this.maquina = function()
{
alert(this.disciplina + " es la mejor disciplina")
}
}
 
let bicicleta = new bici ("MTB", "Scott", 15)
bicicleta.maquina()

// CLASES

class Bici {
    constructor (disciplina, marca, modelo){
    this.disciplina = disciplina
    this.marca = marca
    this.modelo = modelo
    }
}
const personal = new bici ("Bicicleta", 1, "Carbono")

