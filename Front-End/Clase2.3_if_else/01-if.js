//Puedo crear la variable y no darle valor todavia

let a;

//va a ser undefined
console.log(typeof a, a);

a = 20;


//If es la condicion
if (a > 20) {
    //Esto es lo que hace si es true
  console.log("Es mayor");
  //else if es otra condicion  
} else if (a < 20) {
  console.log("Es menor");
  //else solo es si los if y else if dieron false
} else {
  console.log("Igual");
}

// * los if pueden tener solo if y no tener else, pueden tener muchos else if, pueden no tener else pero si muchos if, etc.
