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

