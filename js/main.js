alert("Bienvenidos a gaspar online") 
const x = Infinity
let carrito = 0
const remeras = 1500
const buzos = 3000
const pantalones = 2000
let cantidadRemeras
let cantidadBuzos
let cantidadPantalones



class Usuario {
    constructor(nombre, edad,){
    this.nombre = nombre
    this.edad = edad
        
    }

    saludar (){
        alert("Buenos dias " + this.nombre + " esperamos que puedas disfrutar de nuestra tienda")
    }
}
const persona1=new Usuario(prompt("ingrese su nombre"), prompt( "ingrese su edad"));

persona1.saludar();

class ropa{
    constructor(producto, tipo, extra){
        this.producto = producto;
        this.tipo = tipo;
        this.extra = extra;
    }
}

function comprar() {
    const combos = [];
    let producto = prompt(" Que tipo de ropa desea comprar? ");

    let tipo = prompt("ajustado o suelto? ");

    let extra = prompt("liso o rallado?");

    const combo = new ropa(producto, tipo, extra);
    combos.push(combo);
}

comprar();


function catalogo() {
    for (let i = 0; i < x; i++) {
        let ingreso = parseInt(prompt("Catalogo: \n 1-Remeras \n 2-Buzos \n 3-Pantalones \n 4-Salir")) 
        if (ingreso == 1) {
            cantidadRemeras = parseInt(prompt("Ingrese cantidad de remeras")) 
            carrito += cantidadRemeras*remeras
        } else if (ingreso == 2) {
            cantidadBuzos = parseInt(prompt("Ingrese cantidad de buzos")) 
            carrito += cantidadBuzos*buzos
        }
        if (ingreso == 3) {
            cantidadPantalones = parseInt(prompt("Ingrese cantidad de pantalones")) 
            carrito += cantidadPantalones*pantalones
        } else if (ingreso == 4) {
            console.log(`El total de la compra es: ${carrito} \n remeras : ${cantidadRemeras} \n buzos : ${cantidadBuzos} \n pantalones : ${cantidadPantalones}`) 
            break
        }
    }
}

catalogo(x)

alert(persona1.nombre + " finalisaste tu compra, el total es de " + carrito );













