//Parte 1. . Objetos

//Ejercicio 1

let estudiante = {
    nombre: "Andrea",
    edad: 22,
    programa: "Programacion",
    semestre: 5
};

console.log(estudiante);

//Ejercicio 2

console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("Programa:", estudiante.programa);
console.log("Semestre:", estudiante.semestre);


//Ejercicio 3

estudiante.edad = 23;
estudiante.semestre = 6;
console.log(estudiante);

//Ejercicio 4

estudiante.correo = "andrea@email.com";
estudiante.ciudad = "Guatemala";

console.log(estudiante);

//Ejercicio 5

delete estudiante.ciudad;
console.log(estudiante);

//Ejercicio 6

let computador = {
    marca: "Dell",
    modelo: "Inspiron 15",
    especificaciones: {
        procesador: "Intel Core i5",
        memoriaRAM: "16 GB",
        almacenamiento: "512 GB SSD"
    }
};

console.log("Marca:", computador.marca);
console.log("Modelo:", computador.modelo);
console.log("Procesador:", computador.especificaciones.procesador);
console.log("Memoria RAM:", computador.especificaciones.memoriaRAM);
console.log("Almacenamiento:", computador.especificaciones.almacenamiento);

//Ejercicio 7
let estudiantes = [
    { nombre: "Juan", edad: 20, promedio: 85 },
    { nombre: "Manuel", edad: 21, promedio: 90 },
    { nombre: "María", edad: 19, promedio: 88 },
    { nombre: "Sandra", edad: 22, promedio: 92 },
    { nombre: "Luisa", edad: 20, promedio: 95 }
];

estudiantes.forEach(function(estudiante) {
    console.log("Nombre:", estudiante.nombre);
    console.log("Edad:", estudiante.edad);
    console.log("Promedio:", estudiante.promedio);
    console.log("----------------------");
});

//Parte 2 Desestructuración

//Ejercicio 8
 let nombre = estudiante.nombre
 let programa = estudiante.programa

 console.log(nombre, programa)

 //Ejercicio 9

 let marca = computador.marca
 let procesador = computador.especificaciones.procesador
 let memoria = computador.especificaciones.memoriaRAM

 console.log (marca, procesador, memoria)

//Ejercicio 10

const numeros = [10,20,30,40,50];

console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[4])

//Ejercicio 11

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);

//Parte 3. Arreglos

//Ejercicio 12

let ciudades = ["CDMX","Guatemala","Bogotá", "Paris","Berlin" ];

console.log (ciudades)

//Ejercicio 13


