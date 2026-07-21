//parte 1 Impresiones en consola

//Ejercicio 1

console.log ("Hola Mundo");
console.log ("Bienvenido a JavaScript");
console.log ("Estoy aprendiendo programación");

//Ejercicio 2

console.log ("Adriana Punti");
console.log ("37 años");
console.log ("Ciudad de Guatemala");
console.log ("Desarrolo de software");

//Ejercicio 3

console.log ("*");
console.log ("**");
console.log ("***");
console.log ("****");
console.log ("*****");
console.log ("*******");
console.log ("********");


//parte 2 Variables y números
 
//Ejercicio 4

var x = 20;
var y = 32;

console.log (x)
console.log (y)

//Ejercicio 5

console.log (x+y)
console.log (y-x)
console.log (y*x)
console.log (x/y)
console.log (x%y)
console.log (x**y)

//Ejercicio 6

var nota1 = 85;
var nota2 = 77;
var nota3 = 91;

console.log (nota1)
console.log (nota2)
console.log (nota3)
console.log ((nota1+nota2+nota3)/3)

//Ejercicio 7 

var laprincesita = 97;
console.log("Horas: " + Math.trunc(laprincesita/60));
console.log("Minutos: " + laprincesita%60);

//Ejercicio 8  

let salario = 5900;

console.log("Salario mensual: Q." + salario);
console.log("Salario anual: Q." + (salario*14));

//parte 3 Operadores de asignación

//Ejercicio 9

var puntos = 100;

console.log(puntos += 50);
console.log(puntos -= 20);
console.log(puntos *= 2);
console.log(puntos /= 5);
console.log(puntos %= 6);

//Ejercicio 10

let ahorro = 1200;

console.log(ahorro)

console.log(ahorro += 50);
console.log(ahorro -= 20);
console.log(ahorro *= 2);

//parte 4 Operadores de comparación


//Ejercicio 11

var x = 25;
var y = 17;

console.log(x>y)
console.log(x<y)
console.log(x>=y)
console.log(x<=y)
console.log(x==y)
console.log(x===y)
console.log(x!=y)
console.log(x!==y)

//Ejercicio 12

let edad = 20;
let edadMinima = 18;

console.log(edadMinima>edad)
console.log(edad<edadMinima)
console.log(edadMinima>=edad)
console.log(edadMinima<=edad)
console.log(edadMinima==edad)
console.log(edadMinima===edad)
console.log(edadMinima!=edad)
console.log(edadMinima!==edad)

//Ejercicio 13

let numero = 50;

console.log(numero>20)
console.log(numero<67)
console.log(numero>=30)
console.log(numero<=27)
console.log(numero==31)

//parte 5 (STRINGS)

//Ejercicio 14

var nombre = "Adriana";
var apellido = "Punti";
var ciudad = "Ciudad de Guatemala";

console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Ciudad: " + ciudad);


//Ejercicio 15

console.log("Hola, mi nombre es " + nombre + " " + apellido + " y vivo en " + ciudad + ".")

//Ejercicio 16 // son backtags no comillas simples

console.log(`Hola, mi nombre es ${nombre} ${apellido} y vivo en ${ciudad}.`);

//Ejercicio 17

var frase = "Tengo una gata atigrada, una naranja y una carey.";

console.log(frase);
console.log("El número de carateres en la frase anterior es: " + frase.length);

//Ejercicio 18

var frase2 = "Tengo clases de programación de lunes a viernes.";

console.log(frase2.toUpperCase());
console.log(frase2.toLowerCase());
console.log("El número de carateres en la frase anterior es: " + frase2.length);


//Ejercicio 19
console.log("El primer caracter de la frase anterior es: " + frase2[0]);
console.log("El último caracter de la frase anterior es: " + frase2[47]);

//Ejercicio 20

var frase3 = "Me gusta comer helado los días viernes.";

console.log(frase3.slice(15, 21));

//Parte 6. Combinando números y cadenas

//Ejercicio 21

var producto = "Galletas Oreo";
var precio = 31;
var cantidad = 6;

console.log(`Producto:${producto}
Precio: Q.${precio}.00
Cantidad: ${cantidad}
Total: Q.${precio*cantidad}.00`
)

//Ejercicio 22

var nombre3 = "Daniel";
var estatura = 170;
var edad2 = 42;

console.log(`Mi nombre es ${nombre3}, mido ${estatura}cm de alto y tengo ${edad2} años.`)

//Ejercicio 23

var producto1 = "Manzana";
var pmanzana = 15;
var producto2 = "Frijol";
var pfrijol = 8;
var producto3 = "Jugo de Uva";
var pjugo = 28;

console.log(`=========================
      FACTURA
=========================
${producto1} ----- Q.${pmanzana}.00 
${producto2} ----- Q.${pfrijol}.00
${producto3} --- Q.${pjugo}.00
Total ------------ Q.${pjugo+pmanzana+pfrijol}.00
=========================
`);

//Ejercicio 24

var mate = 80.5;
var progra = 83.2;
var ingles = 72.5;

console.log(`=========================
      BOLETÍN DE NOTAS
=========================
Matématicas ----- ${mate}
Programación ----- ${progra}
Inglés ----- ${ingles}
Promedio ----- ${Math.trunc((mate+progra+ingles)/3)}
=========================
`);


//RETO FINAL
//Ejercicio 25














