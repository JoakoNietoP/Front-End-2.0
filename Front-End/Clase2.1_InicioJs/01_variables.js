//3 formas de usar las variables

// es global y ese es su mayor defecto. NO USAR

var primera = "hola mundo";

//Las dos formas que vienen en ES6: ley y const. NO son globales, existen donde hayn sido creadas

//const es constante: no se puede cambiar

//const segunda = "hola 2";

//let si puede ser cambiada

//let tercera = "hola 3";

//para imprimirlas, usamos console.log()

console.log('primera:', primera);

console.log('segunda:', segunda);

console.log('tercera:', tercera);

//js reconoce entre MAYUSCULAS & minusculas

let primeraVariable = "Hola wachon";

console.log(primeraVariable);

//podemos reasignar el valor de let y de conts

tercera = "cambiando el valor"
console.log('Tercera:', tercera)

segunda = "cambiando segunda"
console.log(segunda)
