//* comparaciones

//

let num = 15;
let numStr = "15";
let num2 = 16;

//* triple es estricto

if (num === numStr) {
    //Si pongo === es estrictamente igual: tipo y color
  console.log(
    `Num es igual a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
} else if (num !== numStr) {
  console.log(
    `num es distinto a numStr porque ${typeof num} no es igual a ${typeof numStr}`
  );
} else {
  //jamas va a entrar
  console.log(`che que haces aca`);
}

//*doble solo compara los valores, pero no los tipos

if (num == numStr) {
  console.log(
    `Num es igual a numStr porque ${typeof num} es igual a ${typeof numStr}`
  );
} else {
  console.log(
    `num es distinto a numStr porque ${typeof num} no es igual a ${typeof numStr}`
  );
}
