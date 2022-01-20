//3 formas de usar las variables

//!Es global, es vieja y ese es su mayor problema. NO USAR
var primera = "hola mundo!";

//Las dos formas que vienen del ES6: let const. //!NO SON GLOBALES, EXISTEN DONDE LAS CREAMOS

//const es costante no se puede cambiar
//! si intentamos cambiarla el codigo se rompe
const segunda = "Me llamo joaquin";

//let si puede ser cambiada
let tercera = "es mi primer JS";

//* para imprimir usamos clg() o console.log()
console.log(
  primera + " " + segunda + " " + tercera + " y te doy las gracias por leerme!"
);

tercera = "cambio de valor, ya es mi segundo JS!";

console.log(tercera);
