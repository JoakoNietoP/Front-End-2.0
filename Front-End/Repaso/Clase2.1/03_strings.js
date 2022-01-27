//comillas de otro tipo pueden ponerse adentro del string y usarse como caracteres
//la barra \se pone antes de un caracter especial que queremos usar
let comillasSimples =
  "Hola! \"Estoy adentro de comillas simples\" 'igual podemos usar simples'";
// \nhace un salto de linea como el br
let comillasDobles =
  "Hola! \"igual podemos usar dobles\" \n 'yo tambien estoy dentro de comillas'";
let comillasInvertidas = `soy un hola desde un backtick`;

console.log(comillasSimples);
console.log(comillasDobles);

//vamos a acceder a un caracter particular
let conMetodos = "hola mundo";

//empezamos a contar desde 0. Aca pedimos el caracter en la posicion 3:
console.log("Usando métodos: ", conMetodos.charAt(3));
//.charAt() se usa para sacar una letra, caracter o valor contando desde 0, 1, 2, 3, etc
//Podemos hacerlo sin  el metodoy pasamos directamente entre corchetetes[] a cual acceder
console.log("accediendo directamente al caracter: ", conMetodos[6]);
console.log("quiero saber que letra esta en el 23", comillasDobles.charAt(23));

//podriamos crear una variable nueva para guardar ese caracter que queremois.
let unaLetra = conMetodos.charAt(7);
console.log("una letra", unaLetra);
