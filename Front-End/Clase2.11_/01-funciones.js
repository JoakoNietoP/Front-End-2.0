//* tipos de funciones
//https://dev.to/victordeandres/funciones-en-javascript-7-formas-de-declarar-una-funcion-523a
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
//https://www.jasoft.org/Blog/post/Escribiendo-codigo-JavaScript-limpio-funciones-anonimas-auto-ejecutables

//! funcion "clasica": declarativa

function saludar(name) {
  console.log("hola " + name);
};

saludar(pam);

//! funcion expresion: a mitdad de camino entre declarativa y flecha

const clima = function temp(grados) {
  console.log("hoy hace" + grados + "°");
};
//lo llamamos usando el nombre de la cariable, no la funcion
clima(16);

//! la podemos hacer anonimas
const juguetes = function (cantidad) {
  console.log("tengo" + cantidad + "oso de peluche");
};

juguetes(5);

//! flecha, nuiestra vieja amiga:
const hervir = (litros) => {
  console.log("hay que hervir" + litros + "para los fideos");
};
hervor(2)(
  //! iife: inmediately invoque function expression
  //ojo! si no le ponen el punto y coma a lo anterior... la iife se le pega y hace lio
  //es descartrable. Se declara sin nombre y se ejecuta en el momento, y despues chau

  function () {
    console.log("hola mundo");
  }
)();
