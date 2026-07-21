//Parte 1. Condicionales

//Ejercicio 1
var numero = -72;

if (numero < 0){
    console.log("El número es negativo");
}else {
if (numero > 0){
     console.log("El número es positivo");
   }else{
         if(numero = 0){
             console.log("El número es cero.");
         }
            }
};

//Ejercicio 2

var edad = 32;
if (edad < 18){
    console.log("Usted es menor de edad");
} else { 
    console.log("Usted es mayor de edad");
}

//Ejercicio 3

var num1 = -5;
var num2 = 18;
var num3 = 22;

if (num1 >= num2 && num1 >= num3) {
    console.log("El número mayor es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("El número mayor es: " + num2);
} else {
    console.log("El número mayor es: " + num3);
}

//Ejercicio 4

var num4 = 17;

if (num4 % 2 === 0) {
    console.log("El número es Par");
} else {
    console.log("El número es Impar");
}

//Ejercicio 5

var nota = 3.5;

if (nota >= 4.5) {
    console.log("Excelente");
} else { 
    if (nota >= 4 && nota <= 4.49){
        console.log("Bueno");
    } else { if (nota >= 3 && nota <= 3.99){
        console.log("Aceptable");
        } else { if ( nota <= 3){
            console.log("Reprobado");
        }
        }
    }
}

//Ejercicio 7 (El ejercicio 6 es una calculadora y se hizo durante la clase)
var dia = 4;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Sábado");
        break;
    case 6:
        console.log("Domingo");
        break;
   default:
        console.log("Número de mes no válido");
}

//Ejercicio 8
var mes = 7;

// Mostrar el nombre del mes
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Número de mes no válido");
}

//Parte 2. ciclo for

//Ejercicio 9
// Imprimir los números del 1 al 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Ejercicio 10
//Imprima los números del 10 al 1.

// Imprimir los números del 10 al 1 

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
//Ejercicio 11
// Imprimir únicamente los números pares del 1 al 100

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

//Ejercicio 12

// Imprimir únicamente los múltiplos de 5 entre 1 y 100

for (let i = 5; i <= 100; i += 5) {
    console.log(i);
}

//Ejercicio 13
// Calcular la suma de los números del 1 al 100

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i;
}

console.log("La suma es: " + suma);

//Ejercicio 13
// Imprimir la tabla de multiplicar

let num5 = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num5 + " x " + i + " = " + (num5 * i));
}

//Ejercicio 15
// Calcule el factorial de un número.
//se usara el mismo numero del ejericio anterior

let factorial = 1;

// Calcular el factorial
for (let i = 1; i <= num5; i++) {
    factorial *= i;
}

console.log("El factorial de " + num5 + " es: " + factorial);

//Parte 3. While y Do While
//Ejercicio 17
// Imprimir los números del 1 al 20 utilizando while

let i = 1;

while (i <= 20) {
    console.log(i);
    i++;
}

//Ejercicio 18
// Imprimir únicamente los números pares del 2 al 50 con while

//let i = 2;
//while (i <= 50) {
//    console.log(i);
//    i += 2;
//}

//Parte 4. Funciones
//Ejercicio 21


function saludar() {
    console.log("Hola, bienvenido a JavaScript.");
}
saludar();

//Ejercicio 22

function mostrarNombre(nombre) {
    console.log(nombre);
};

mostrarNombre ("Adriana Punti");

//Ejercicio 23

function sumar (a, b){
    return a + b;
}
console.log(sumar(9,10));

//Ejercicio 24

function esPar(numeropi){
    if (numeropi % 2 === 0){
        return true;
    } else {
        return false;
    }
}

console.log(esPar(8));
console.log(esPar(7));

//Ejercicio 25

function calcularPromedio(n1, n2, n3){
    return (n1+n2+n3)/3
}

console.log(calcularPromedio(10, 15, 17))

//Ejercicio 26

function mayor(a, b){
    if (a > b){
        return console.log("El número mayor es " + a + ".");
    } else {
        return console.log("El número mayor es " + b + ".");
    }
};
console.log(mayor(7, 6));

//Ejercicio 27

function calcularAreaRectangulo(base, altura){
    return (base * altura)/2
};

console.log(calcularAreaRectangulo(15, 4));

//Ejercicio 28 El ejericio dice que el 19% pero lo hice on el 12% que es el de Guatemala

function calcularIVA(valor){
    return valor*0.12
};
console.log(calcularIVA(100));

//Ejercicio 29

function convertirCelsiusAFahrenheit(celsius){
    return (celsius*1.8 + 32);
}

console.log(convertirCelsiusAFahrenheit(18));

//Ejercicio 30

function esMayorDeEdad(edad){
    if (edad >= 18){
        return console.log("Mayor de edad");
    } else {
        return console.log("Menor de edad");
    }
}

console.log(esMayorDeEdad(21));

//Parte 5. Integración
//Ejercicio 31

function valorNota (nota){
    if (nota >= 4.5) {
    return console.log("Excelente");
} else { 
    if (nota >= 4 && nota <= 4.49){
        return console.log("Bueno");
    } else { if (nota >= 3 && nota <= 3.99){
         return console.log("Aceptable");
        } else { if ( nota <= 3){
            return console.log("Reprobado");
                }
            }
        }
    }
};

console.log(valorNota(4.5));

//Ejercicio 32
function tablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
};

console.log(tablaMultiplicar(4));

//Ejercicio 33

function numeroFactorial(numero){
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

console.log(numeroFactorial(5));

//Ejercicio 33

function calculadora(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Operador no válido";
    }
}

console.log(calculadora(10, 5, "+"));

//Ejercicio 35
function sumaNumeros(numero) {
    let suma = 0;

    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    return suma;
}
console.log(sumaNumeros(10));

//Ejercicio 35

function imprimirPatron() {
    for (let i = 1; i <= 5; i++) {
        let patron = "";

        for (let j = 1; j <= i; j++) {
            patron += "*";
        }

        console.log(patron);
    }
}

console.log(imprimirPatron());

//Ejercicio 36


//Ejercicio 37

// Crear la función
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(esPrimo(7));







