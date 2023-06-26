/* ========================EJERCICIO 1======================== */

const parImpar = (numero) => {
  if (numero % 2 == 0) {
    console.log("El numero " + numero + " es par");
  } else {
    console.log("El numero " + numero + " es impar");
  }
};

parImpar(5);

/* ========================EJERCICIO 2======================== */

const mayorIgual = (n1, n2) => {
  if (n1 > n2) {
    console.log("Num 1 = " + n1 + " Es el número mayor");
  }

  if (n2 > n1) {
    console.log("Num 2 = " + n2 + " Es el número mayor");
  }

  if (n1 == n2) {
    console.log("Los números son iguales");
  }
};

mayorIgual(25, 26);

/* ========================EJERCICIO 3======================== */

const multiplo5 = (numero) => {
  if (numero % 5 == 0) {
    console.log("El número " + numero + " es multiplo de 5");
  } else {
    console.log("El número " + numero + " no es multiplo de 5");
  }
};

multiplo5(2);

/* ========================EJERCICIO 4======================== */

const listarNumeros = (numero) => {
  for (let index = 0; index <= numero; index++) {
    console.log(index);
  }
};

listarNumeros(5);

/* ========================EJERCICIO 5======================== */
const imprimirXveces = (palabra, veces) => {
  for (let index = 0; index < veces; index++) {
    console.log(palabra);
  }
};

imprimirXveces("Santiago", 200);

/* ========================EJERCICIO 6======================== */
let dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

const arrayPrint = (array) => {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
};

arrayPrint(dias);

/* ========================EJERCICIO 7======================== */
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const printArr = (numarray) => {
  for (let index = 0; index < numarray.length; index++) {
    if (index == 4) {
      continue;
    }
    console.log(numarray[index]);
  }
};

printArr(arr)

/* ========================EJERCICIO 8======================== */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplicarArray = (param, num) => {
  for (let index = 0; index < param.length; index++) {
    console.log(param[index] * num)
  }
}

multiplicarArray(numeros, 2)