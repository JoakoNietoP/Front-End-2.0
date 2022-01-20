// comillas de otro tipo pueden ponerse adentro en el string y usarse como caracteres
//la barra se pone antes de un caracter que tenga que ser especial- Se llaman caracteres de escape

let comillasSimples = "hola";
let comillasDobles =
  "hola! \"igual podemos usar dobles\" \n'yo tambien estoy dentro de comillas' ";

//contrl + alt + }
let comillasInvertidas = `soy un hola desde bacstick`;

console.log(comillasSimples);
console.log(comillasDobles);
console.log(comillasInvertidas);

//vamos a acceder a un caracter en particular!

let conMetodos = "hola mundo";

//empezamos a contar desde 0. Aca pedimos el caracter en la posicion 3:

console.log("usamos metodos: ", conMetodos.charAt(3));

//podemos en un string acceder directamente desde el caracter
console.log("accediendo directamente al caracter: ", conMetodos[6]);

// podríamos crear una variable nueva para guardar ese caracter que queremos:

let unaLetra = conMetodos.charAt(7);
console.log("unaLetra:", unaLetra);
