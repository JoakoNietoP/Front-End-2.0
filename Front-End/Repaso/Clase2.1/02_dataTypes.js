//* Tipos de Datos!!
//!para detectar que tipo de dato es, existe el typeof junto con el consolelog

//! String
//Es una cadena de texto, cualquier cosas que quieras escribir.
//Los strings llevan comillas dobles "" o simples ''

//! Number
//Un numero, sino vas a hacer operaciones matematicas esta bueno que sean string

//! Boolean
//Tiene solo dos estado, true o false, verdadero o falso

//! Object
//Almacena un monton de objetos adentro junto con un nombre -> valor

//! Array
//Similar a objetos, sin necesidad de nombre

//! Function
//Una parte de codigo que hace algo

let variable1 = "soy un string";
//typeof nos dice el tipo de variable
console.log(typeof variable1);
variable1 = 26;
console.log(typeof variable1);

//no hay un tipo separado para los decimales! no tenemos floats¿?

let variable2 = 15.4;
console.log(typeof variable2);

//Los booleanos solo tienen dos valores, true o false
let esVerdad = false;
//sin el typeof, el booleano toma otro color para denotar que no es un string
console.log(typeof esVerdad);
console.log(esVerdad);

//array: guarda cosas en orden. Con los corchetes [] Js ya sabe que es un array

let frutas = ["bananas", "frutilla", "pera", 25, true];
console.log(frutas);
console.log(typeof frutas);

//objetos:similar al array pero ademas es un par nombre: valor. Lo hacemos con llaves
let persona = {
  ojos: 2,
  piernas: 2,
  cabeza: 1,
  cola: false,
  nombre: "Pablo",
};
console.log(persona);
console.log(typeof persona);
