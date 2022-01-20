const nombre = "Joako";
const age = 26;

const uniendoConBackTicks = `Mi nombre es ${nombre} y tengo ${age} años.`;

console.log(uniendoConBackTicks);
//*Devuelve mi nombre es joako y tengo 26 años

const uniendoConMas = "Hola soy " + nombre + " y tengo " + age + " años.";
console.log(uniendoConMas);

const queHaces = "programacion";
console.log("Hola yo te enseño " + queHaces);

const parte1 = "Hola soy Joaquin"
const parte2 = " y tengo 26 años"

const uniendo = parte1.concat(parte2)

console.log(uniendo);