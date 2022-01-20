//* https://www.w3schools.com/js/js_operators.asp
//* podemos sumar 1:

let num = 5;

num++;
console.log(num);

//*si no voy a usar el num++. tengo que primero hacer esto, como si estuviera reagsinando el valor:

num = num + 1;
console.log(num);

//*y aca lo mismo
num--;
console.log(num);

num = num - 1;
console.log(num);

//* podemos usar operadores de asignacion:

num += 15;
console.log(num);

num *= 2;
console.log(num);

num -= 4;
console.log(num);

num /= 6;
console.log(num);

//*El resto nos da lo que queda sobrando en la division

num %= 2;
console.log(num);

console.log("resto entre 9 y 2: ", 9 % 2);

//*si queremos sacar par o inpar usamos el 2, pero el resto puede ir con cualquier cosa

//* ** es potencia
//* seria igual a poner num = num ** 3

num = 3;
num **= 3;
console.log(num);